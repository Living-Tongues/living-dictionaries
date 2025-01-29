export function formatTime(seconds: number) {
  const mm = Math.floor(seconds / 60)
  const ss = zeroPadded(seconds % 60)
  return `${mm}:${ss}`
}

function zeroPadded(number: number) {
  return number >= 10 ? number.toString() : `0${number}`
}

export function printDate(date: Date | number): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}

export function supabase_date_to_friendly(date: Date | number, language_code = 'en-US'): string {
  return new Intl.DateTimeFormat(language_code, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(date)
}

export function printDateWithWeekday(date: Date | number): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}

export function minutes_ago_in_ms(minutes: number): number {
  const milliseconds = minutes * 60 * 1000
  return Date.now() - milliseconds
}
