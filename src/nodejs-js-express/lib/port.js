'use strict';

// port set up
const port_candidate = process.argv
  .slice(2)
  .filter((opt) => opt.match(/^PORT=[1-9]+\d*$/i));
const port_candidate_first = port_candidate[0] || '';

// priority: argument > environment variable > default
const port =
  '' !== port_candidate_first
    ? Number(port_candidate_first.match(/\d+/))
    : Number(process.env.PORT) || 3000;

module.exports = port;
