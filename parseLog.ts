import * as fs from 'fs';
import * as path from 'path';
import { LogParser } from './LogParser';

const filePath = process.argv[2];
if (!filePath) {
  console.error('❌ Please specify the log file path as an argument.');
  process.exit(1);
}

const logPath = path.resolve(filePath);
const data = fs.readFileSync(logPath, 'utf-8');
const lines = data.split('\n').filter(Boolean);

const parser = new LogParser();
parser.parseLines(lines);

const results = parser.getResults();

console.log('✅ Log Analysis Results');
console.log('Unique IPs:', results.uniqueIpCount);
console.log('Top 3 URLs:');
results.top3Urls.forEach(([url, count]) => console.log(`- ${url}: ${count} visits`));
console.log('Top 3 IPs:');
results.top3Ips.forEach(([ip, count]) => console.log(`- ${ip}: ${count} requests`));
