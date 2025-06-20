export class LogParser {
  private readonly uniqueIps: Set<string> = new Set();
  private readonly ipHits: Map<string, number> = new Map();
  private readonly urlHits: Map<string, number> = new Map();

  parseLine(line: string): void {
    const ipMatch = RegExp(/^(\d{1,3}(?:\.\d{1,3}){3})/).exec(line);
    const urlMatch = RegExp(/"(?:GET|POST|PUT|DELETE|HEAD|OPTIONS|PATCH)\s+(https?:\/\/[^\s"]+|\/[^\s"]*)\s+HTTP\/[0-9.]+"/).exec(line);


    if (!ipMatch || !urlMatch) return;

    const ip = ipMatch[1];
    const url = urlMatch[1];

    this.uniqueIps.add(ip);
    this.ipHits.set(ip, (this.ipHits.get(ip) ?? 0) + 1);
    this.urlHits.set(url, (this.urlHits.get(url) ?? 0) + 1);
  }

  parseLines(lines: string[]): void {
    lines.forEach(line => this.parseLine(line));
  }

  getResults() {
    const top3Urls = [...this.urlHits.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3);
    const top3Ips = [...this.ipHits.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3);

    return {
      uniqueIpCount: this.uniqueIps.size,
      top3Urls,
      top3Ips
    };
  }
}
