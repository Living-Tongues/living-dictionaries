import type { IDictionary, IEntry, IUser } from '$lib/interfaces';
import { dictionary } from 'svelte-i18n';
import { glossingLanguages } from './glossing-languages-temp';
import { semanticDomains } from '$lib/mappings/semantic-domains';
import { partsOfSpeech } from '$lib/mappings/parts-of-speech';
import { firebaseConfig } from '$sveltefire/config';
import { fetchSpeakers } from '../helpers/fetchSpeakers';
import JSZip from 'jszip';

export function convertToCSV(objArray) {
  const array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  let str = '';

  for (let i = 0; i < array.length; i++) {
    let line = '';
    for (const index in array[i]) {
      if (line != '') line += ',';

      line += array[i][index];
    }

    str += line + '\r\n';
  }

  return str;
}

async function downloadMedia(mediaURLs: string[]) {
  //Zip and downloading images)
  const blobMedia = [];
  await Promise.all(
    mediaURLs.map(async (url) => {
      try {
        const fetchedMedia = await fetch(url);
        const blobs = await fetchedMedia.blob();
        blobMedia.push(blobs);
      } catch {
        //TODO I don't know what to do here!
        console.log('Something is wrong!');
      }
    })
  );
  return blobMedia;
}

async function zipper(
  zipName: string,
  CSVFile = null,
  CSVName: string,
  blobAudios: Blob[],
  blobImages: Blob[]
) {
  if (blobAudios.length > 0 || blobImages.length > 0) {
    const zip = new JSZip();
    CSVFile ? zip.file(CSVName, CSVFile) : '';
    const media = zip.folder('media/');
    let indexAudio = 1;
    let indexImage = 1;
    blobImages.forEach((bi) => {
      media.folder('images/').file(`image${indexAudio}.jpeg`, bi, { binary: true });
      indexAudio++;
    });
    blobAudios.forEach((ba) => {
      media.folder('audios/').file(`audios${indexImage}.wav`, ba, { binary: true });
      indexImage++;
    });

    const { saveAs } = await import('file-saver');
    zip.generateAsync({ type: 'blob' }).then((blob) => {
      saveAs(blob, `${zipName}.zip`);
    });
  }
}

function fileAsBlob(itemsFormatted) {
  function replacer(_, value: any) {
    // Filtering out properties
    if (value === undefined || value === null) {
      return '';
    }
    return value;
  }
  const jsonObject = JSON.stringify(itemsFormatted, replacer);
  const csv = convertToCSV(jsonObject);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  return blob;
}

export function downloadObjectAsCSV(itemsFormatted: Record<string, unknown>[], title: string) {
  const blob = fileAsBlob(itemsFormatted);
  const d = new Date();
  const date = d.getMonth() + 1 + '_' + d.getDate() + '_' + d.getFullYear();
  const exportedFilename = title + '_' + date + '.csv' || 'export.csv';

  const link = document.createElement('a');
  if (link.download !== undefined) {
    // feature detection
    // Browsers that support HTML5 download attribute
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', exportedFilename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

function valuesInColumn(itemsFormatted, i, values, columnName, fn) {
  if (values) {
    let stringValue = '';
    //In case some strings contain commas
    const list = values.map(fn);
    stringValue += list.map((el) => el.replace(/,/g, ' -'));
    stringValue = stringValue.replace(/,/g, ' | ');
    Object.assign(itemsFormatted[i], JSON.parse(`{"${columnName}": "${stringValue}"}`));
  } else {
    Object.assign(itemsFormatted[i], JSON.parse(`{ "${columnName}": "" }`));
  }
}

export function exportDictionariesAsCSV(data: IDictionary[], title: string) {
  const headers = {
    name: 'Dictionary Name',
    url: 'URL',
    iso6393: 'ISO 639-3',
    glottocode: 'Glottocode',
    location: 'Location',
    latitude: 'Latitude',
    longitude: 'Longitude',
    thumbnail: 'Thumbnail',
  };

  const itemsFormatted = [];
  data.forEach((dictionary) => {
    let cleanedLocation = '';
    if (dictionary.location) {
      const location = dictionary.location + '';
      cleanedLocation = location.replace(/,/g, '_');
    }

    itemsFormatted.push({
      name: dictionary.name.replace(/,/g, '_'),
      url: dictionary.url,
      iso6393: dictionary.iso6393 || '',
      glottocode: dictionary.glottocode || '',
      location: cleanedLocation,
      latitude: (dictionary.coordinates && dictionary.coordinates.latitude) || '',
      longitude: (dictionary.coordinates && dictionary.coordinates.longitude) || '',
      thumbnail: dictionary.thumbnail || '',
    });
  });

  itemsFormatted.unshift(headers);
  downloadObjectAsCSV(itemsFormatted, title);
}

export function exportUsersAsCSV(data: IUser[], title: string) {
  const headers = {
    displayName: 'Name',
    email: 'Email',
  };

  const itemsFormatted = [];
  data.forEach((user) => {
    itemsFormatted.push({
      displayName: user.displayName && user.displayName.replace(/,/, ''),
      email: user.email,
    });
  });

  itemsFormatted.unshift(headers);
  downloadObjectAsCSV(itemsFormatted, title);
}

export async function exportEntriesAsCSV(
  data: IEntry[],
  title: string,
  glosses: string[],
  includeAudios = false,
  includeImages = false
) {
  const speakers = await fetchSpeakers(data);
  const imageUrls = [];
  const audioUrls = [];
  const headers = {
    lx: 'Lexeme/Word/Phrase',
    ph: 'Phonetic (IPA)',
    in: 'Interlinearization',
    mr: 'Morphology',
    di: 'Dialect for this entry',
    nt: 'Notes',
    psab: 'Parts of speech abbreviation',
    ps: 'Parts of speech',
    sr: 'Source(s)',
  };

  const itemsFormatted = [];
  data.forEach((entry, i) => {
    //Avoiding showing null values
    const entryKeys = Object.keys(entry);
    entryKeys.forEach((key) => (!entry[key] ? (entry[key] = '') : entry[key]));
    itemsFormatted.push({
      lx: entry.lx.replace(/,/g, ' -'),
      ph: entry.ph,
      in: entry.in,
      mr: entry.mr,
      di: entry.di,
      nt: entry.nt,
      //xv: entry.xv,
    });
    //Assigning parts of speech (abbreviation & name)
    Object.assign(
      itemsFormatted[i],
      JSON.parse(`{
      "psab": "${entry.ps ? entry.ps : ''}"
    }`)
    );
    if (entry.ps) {
      const pos = partsOfSpeech.find((ps) => ps.enAbbrev === entry.ps)?.enName;
      Object.assign(
        itemsFormatted[i],
        JSON.parse(`{
        "ps": "${pos}"
      }`)
      );
    } else {
      Object.assign(
        itemsFormatted[i],
        JSON.parse(`{
        "ps": ""
      }`)
      );
    }
    //Assigning sources
    valuesInColumn(itemsFormatted, i, entry.sr, 'sr', (el) => el);
    //Assigning semantic domains
    semanticDomains.forEach((sd, index) => {
      Object.assign(headers, JSON.parse(`{"sd${index}": "${sd.name.replace(/,/g, ' -')}"}`));
      if (entry.sdn) {
        Object.assign(
          itemsFormatted[i],
          JSON.parse(`{"sd${index}": "${entry.sdn.includes(sd.key) ? '✔' : ''}"}`)
        );
      } else {
        Object.assign(itemsFormatted[i], JSON.parse(`{"sd${index}": ""}`));
      }
    });
    //Assigning glosses
    glosses.forEach((bcp) => {
      Object.assign(headers, JSON.parse(`{ "gl${bcp}": "${glossingLanguages[bcp]} Gloss" }`));
      Object.assign(
        itemsFormatted[i],
        JSON.parse(`{
        "gl${bcp}": "${entry.gl[bcp] ? entry.gl[bcp].replace(/,/g, ' -') : ''}"
      }`)
      );
    });
    //Assigning example sentences
    for (let j = 0; j <= glosses.length; j++) {
      if (j === glosses.length) {
        Object.assign(headers, JSON.parse(`{"xs${title}": "Example sentence in ${title}"}`));
        if (entry.xs) {
          Object.assign(
            itemsFormatted[i],
            JSON.parse(`{
          "xs${title}": "${entry.xs['vn'] ? entry.xs['vn'] : ''}"
        }`)
          );
        } else {
          Object.assign(
            itemsFormatted[i],
            JSON.parse(`{
              "xs${title}": ""
            }`)
          );
        }
      } else {
        Object.assign(
          headers,
          JSON.parse(`{"xs${glosses[j]}": "Example sentence in ${glossingLanguages[glosses[j]]}"}`)
        );
        if (entry.xs) {
          Object.assign(
            itemsFormatted[i],
            JSON.parse(`{
            "xs${glosses[j]}": "${entry.xs[glosses[j]] ? entry.xs[glosses[j]] : ''}"
          }`)
          );
        } else {
          Object.assign(
            itemsFormatted[i],
            JSON.parse(`{
            "xs${glosses[j]}": ""
          }`)
          );
        }
      }
    }
    //Audio metadata
    Object.assign(headers, {
      aupa: 'Audio path',
      ausn: 'Speaker name',
      aubp: 'Speaker birthplace',
      aude: 'Speaker decade',
    });
    if (entry.sf) {
      const speaker = speakers.find((speaker) => speaker?.id === entry.sf.sp);
      const path = entry.sf.path || '';
      const speakerName = speaker?.displayName || entry.sf.speakerName || '';
      const speakerBP = speaker?.birthplace || '';
      const speakerDecade = speaker?.decade || '';
      Object.assign(
        itemsFormatted[i],
        JSON.parse(`{
        "aupa": "${path}",
        "ausn": "${speakerName}",
        "aubp": "${speakerBP}",
        "aude": "${speakerDecade}"
      }`)
      );
      const convertedAudioPath = entry.sf?.path.replace(/\//g, '%2F');
      audioUrls.push(
        `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${convertedAudioPath}?alt=media`
      );
    } else {
      Object.assign(itemsFormatted[i], { aupa: '', ausn: '', aubp: '', aude: '' });
    }
    //TESTING
    if (entry.pf) {
      const convertedImagesPath = entry.pf.path.replace(/\//g, '%2F');
      imageUrls.push(
        `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${convertedImagesPath}?alt=media`
      );
    }
    i++;
  });

  itemsFormatted.unshift(headers);
  const CSVBlob = fileAsBlob(itemsFormatted);
  if (includeImages && includeAudios) {
    const imagesURLs = await downloadMedia(imageUrls);
    const audiosURLs = await downloadMedia(audioUrls);
    zipper(title, CSVBlob, `${title}.csv`, audiosURLs, imagesURLs);
  } else if (includeAudios) {
    const audiosURLs = await downloadMedia(audioUrls);
    zipper(title, CSVBlob, `${title}.csv`, audiosURLs, []);
  } else if (includeImages) {
    const imagesURLs = await downloadMedia(imageUrls);
    zipper(title, CSVBlob, `${title}.csv`, [], imagesURLs);
  } else {
    downloadObjectAsCSV(itemsFormatted, title);
  }
}
