function formatNumber(num) {
  if (num == null) return
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export { formatNumber }
