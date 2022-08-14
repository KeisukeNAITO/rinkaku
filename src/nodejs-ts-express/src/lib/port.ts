// port set up
const port_candidate: string[] = process.argv
  .slice(2)
  .filter((opt) => opt.match(/^PORT=[1-9]+\d*$/i));
const port_candidate_first: string = port_candidate[0] || '';

// priority: argument > environment variable > default
const port: number =
  '' !== port_candidate_first
    ? Number(port_candidate_first.match(/\d+/))
    : Number(process.env.PORT) || 3000;

export default port;
