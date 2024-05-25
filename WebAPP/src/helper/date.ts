const defaults = {
  year: 1970,
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0
}
export class TimeOnly {
  data: Date

  constructor(time: Date)
  constructor(timeString: string)
  constructor(timeOrTimeString: Date | string) {
    if (timeOrTimeString instanceof Date) {
      this.data = new Date(
        defaults.year,
        defaults.month,
        defaults.day,
        timeOrTimeString.getHours(),
        timeOrTimeString.getMinutes(),
        timeOrTimeString.getSeconds()
      )
    } else {
      const [hours, minutes, seconds] = timeOrTimeString.split(':').map(Number)
      this.data = new Date(defaults.year, defaults.month, defaults.day, hours, minutes, seconds)
    }
  }
  setDate(time: Date): void {
    this.data = new Date(
      defaults.year,
      defaults.month,
      defaults.day,
      time.getHours(),
      time.getMinutes(),
      time.getSeconds()
    )
  }
  setString(time: string): void {
    const [hours, minutes, seconds] = time.split(':').map(Number)
    this.data = new Date(defaults.year, defaults.month, defaults.day, hours, minutes, seconds)
  }
  getDate(): Date {
    return this.data
  }
  getString(): string {
    const hours = this.data.getHours().toString().padStart(2, '0')
    const minutes = this.data.getMinutes().toString().padStart(2, '0')
    const seconds = this.data.getSeconds().toString().padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
  }
}

export class DateOnly {
  data: Date

  constructor(date: Date)
  constructor(dateString: string)
  constructor(dateOrDateString: Date | string) {
    if (dateOrDateString instanceof Date) {
      this.data = new Date(
        dateOrDateString.getFullYear(),
        dateOrDateString.getMonth(),
        dateOrDateString.getDate(),
        defaults.hour,
        defaults.minute,
        defaults.second
      )
    } else {
      const [year, month, day] = dateOrDateString.split('/').map(Number)
      this.data = new Date(year, month - 1, day)
    }
  }
  setDate(date: Date): void {
    this.data = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      defaults.hour,
      defaults.minute,
      defaults.second
    )
  }
  setString(date: string): void {
    const [year, month, day] = date.split('/').map(Number)
    this.data = new Date(year, month - 1, day)
  }
  getDate(): Date {
    return this.data
  }
  getString(): string {
    const year = this.data.getFullYear()
    const month = (this.data.getMonth() + 1).toString().padStart(2, '0')
    const day = this.data.getDate().toString().padStart(2, '0')
    return `${year}/${month}/${day}`
  }
}

export class DateTime {
  data: Date

  constructor(dateTime: Date)
  constructor(dateTimeString: string)
  constructor(dateTimeOrDateTimeString: Date | string) {
    if (dateTimeOrDateTimeString instanceof Date) {
      this.data = dateTimeOrDateTimeString
    } else {
      const [datePart, timePart] = dateTimeOrDateTimeString.split(' ')
      const [year, month, day] = datePart.split('/').map(Number)
      const [hours, minutes, seconds] = timePart.split(':').map(Number)
      this.data = new Date(year, month - 1, day, hours, minutes, seconds)
    }
  }
  setDate(dateTime: Date): void {
    this.data = dateTime
  }
  setString(dateTime: string): void {
    const [datePart, timePart] = dateTime.split(' ')
    const [year, month, day] = datePart.split('/').map(Number)
    const [hours, minutes, seconds] = timePart.split(':').map(Number)
    this.data = new Date(year, month - 1, day, hours, minutes, seconds)
  }
  getDate(): Date {
    return this.data
  }
  getString(): string {
    const year = this.data.getFullYear()
    const month = (this.data.getMonth() + 1).toString().padStart(2, '0')
    const day = this.data.getDate().toString().padStart(2, '0')
    const hours = this.data.getHours().toString().padStart(2, '0')
    const minutes = this.data.getMinutes().toString().padStart(2, '0')
    const seconds = this.data.getSeconds().toString().padStart(2, '0')
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
  }
}
