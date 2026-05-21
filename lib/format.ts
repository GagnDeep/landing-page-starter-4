export const formatINR = (n: number) =>
  `₹${Math.round(n).toLocaleString("en-IN")}`

export const formatNumber = (n: number, decimals = 0) =>
  n.toLocaleString("en-IN", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  })

export const formatLakh = (n: number) => `₹${(n / 100000).toFixed(1)}L`
