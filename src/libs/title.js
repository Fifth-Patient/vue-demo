const defaultTitle = 'Stardust'

export default function (title) {
  if (title && title !== '') {
    window.document.title =  '🌠 ' + title + ' | ' + defaultTitle
  } else {
    window.document.title = defaultTitle
  }
}
