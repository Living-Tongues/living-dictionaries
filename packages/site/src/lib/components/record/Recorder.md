<script lang="ts">
  import { Story } from 'kitbook';
  import { srcObject, Button } from 'svelte-pieces';
  import type { Options } from 'recordrtc';
  import MediaStream from './MediaStream.svelte';
  import Recorder from './Recorder.svelte';

  const options: Options = {
    type: 'video',
    mimeType: 'video/webm;codecs=h264', // vp8, vp9, h264, mkv, opus/vorbis
    bitsPerSecond: 256 * 8 * 1024,
    // timeSlice: 1000,
  };
</script>

<Story>
  <div>
    <MediaStream let:stream>
      {#if stream}
        <Recorder
          {stream}
          {options}
          let:start
          let:pause
          let:stop
          let:recorder
          let:recordingTime
          let:state>
          <Button onclick={start}>Start</Button>
          {#if state === 'recording' || state === 'paused'}
            <Button onclick={pause}>{state === 'recording' ? 'Pause' : 'Unpause'}</Button>
          {/if}
          <Button
            onclick={async () => {
              const blob = await stop();
              console.log(blob);
            }}>Stop</Button>
          <!-- Should the Blob be stored in the Recorder component so it can be passed down, or emitted so it can be listened for? -->
          <Button
            onclick={() => {
              console.log(recorder.getState());
            }}>Log State</Button>
          <div>State: {state}</div>
          <div>Recording Time: {recordingTime}</div>
        </Recorder>
        <!-- svelte-ignore a11y-media-has-caption -->
        <video muted volume={0} use:srcObject={stream} autoplay playsinline controls />
      {/if}
    </MediaStream>
  </div>
</Story>
