function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

export { isValidDate };
