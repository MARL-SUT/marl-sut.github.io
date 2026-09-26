import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the MARL course homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Welcome - Multi-Agent RL Course<\/title>/i);
  assert.match(html, /Multi-Agent RL Course/);
  assert.match(html, /Course Description/);
  assert.match(html, /Instructor/);
  assert.match(html, /Guests/);
  assert.match(html, /Schedule/);
  assert.match(html, /Grading/);
  assert.match(html, /Teaching Assistants/);
  assert.match(html, /Sharif University of Technology/);
  assert.doesNotMatch(html, /Blog|Prerequisites|Workshops|Recitations/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});
