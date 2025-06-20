import { LogParser } from './LogParser';

describe('LogParser', () => {
  it('correctly analyzes logs', () => {
    const logs = [
      '177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200',
      '168.41.191.40 - - [09/Jul/2018:10:11:30 +0200] "GET http://example.net/faq/ HTTP/1.1" 200',
      '168.41.191.41 - - [11/Jul/2018:17:41:30 +0200] "GET /this/page/does/not/exist/ HTTP/1.1" 404 ',
      '168.41.191.40 - - [09/Jul/2018:10:10:38 +0200] "OPTIONS http://example.net/blog/category/meta/ HTTP/1.1" 200 3574',
      '177.71.128.21 - - [10/Jul/2018:22:22:08 +0200] "PATCH /blog/2018/08/survey-your-opinion-matters/ HTTP/1.1" 200 3574',
      '168.41.191.9 - - [09/Jul/2018:23:00:42 +0200] "GET /docs/manage-users/ HTTP/1.1" 200 3574',
      '168.41.191.40 - - [09/Jul/2018:10:11:56 +0200] "GET /blog/category/community/ HTTP/1.1" 200 3574',
      '168.41.191.34 - - [10/Jul/2018:22:01:17 +0200] "GET /faq/ HTTP/1.1" 200 3574',
      '177.71.128.21 - - [10/Jul/2018:22:21:03 +0200] "POST /docs/manage-websites/ HTTP/1.1" 200 3574',
      '50.112.00.28 - - [11/Jul/2018:15:49:46 +0200] "GET /faq/how-to-install/ HTTP/1.1" 200 3574',
      '50.112.00.11 - admin [11/Jul/2018:17:31:56 +0200] "GET /asset.js HTTP/1.1" 200 3574',
      '72.44.32.11 - - [11/Jul/2018:17:42:07 +0200] "GET /to-an-error HTTP/1.1" 500 3574',
      '72.44.32.10 - - [09/Jul/2018:15:48:07 +0200] "TRACE / HTTP/1.1" 200 3574',
      '168.41.191.9 - - [09/Jul/2018:22:56:45 +0200] "GET /docs/ HTTP/1.1" 200 3574 ',
      '168.41.191.43 - - [11/Jul/2018:17:43:40 +0200] "GET /moved-permanently HTTP/1.1" 301 3574',
      '168.41.191.43 - - [11/Jul/2018:17:44:40 +0200] "GET /temp-redirect HTTP/1.1" 307 3574',
      '168.41.191.40 - - [09/Jul/2018:10:12:03 +0200] "GET /docs/manage-websites/ HTTP/1.1" 200 3574',
      '168.41.191.34 - - [10/Jul/2018:21:59:50 +0200] "POST /faq/how-to/ HTTP/1.1" 200 3574',
      '72.44.32.10 - - [09/Jul/2018:15:49:48 +0200] "GET /translations/ HTTP/1.1" 200 3574',
      '79.125.00.21 - - [10/Jul/2018:20:03:40 +0200] "GET /newsletter/ HTTP/1.1" 200 3574',
      '50.112.00.11 - admin [11/Jul/2018:17:31:05 +0200] "GET /hosting/ HTTP/1.1" 200 3574',
      '72.44.32.10 - - [09/Jul/2018:15:48:20 +0200] "GET /download/counter/ HTTP/1.1" 200 3574 ',
      '50.112.00.11 - admin [11/Jul/2018:17:33:01 +0200] "GET /asset.css HTTP/1.1" 200 3574 ',

    ];

    const parser = new LogParser();
    parser.parseLines(logs);
    const result = parser.getResults();

    expect(result.uniqueIpCount).toBe(11);
    expect(result.top3Urls).toEqual([
      ['/docs/manage-websites/', 2],
      ['/intranet-analytics/', 1],
      ['http://example.net/faq/', 1],
    ]);
    expect(result.top3Ips).toEqual([
      ['168.41.191.40', 4],
      ['177.71.128.21', 3],
      ['50.112.00.11', 3],
    ]);
  });
});
