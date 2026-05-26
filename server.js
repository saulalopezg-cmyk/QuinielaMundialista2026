const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const dbPath = path.join(root, "db.json");
const port = 5501;
const host = "127.0.0.1";
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

http
  .createServer((req, res) => {
    if (req.url === "/api/state" && req.method === "GET") {
      fs.readFile(dbPath, "utf8", (error, data) => {
        if (error) {
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Database not found" }));
          return;
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
      });
      return;
    }

    if (req.url === "/api/state" && req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
        if (body.length > 2_000_000) req.destroy();
      });
      req.on("end", () => {
        try {
          const parsed = JSON.parse(body);
          fs.writeFile(dbPath, JSON.stringify(parsed, null, 2), "utf8", (error) => {
            if (error) {
              res.writeHead(500, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ error: "Could not save database" }));
              return;
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ ok: true }));
          });
        } catch {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Invalid JSON" }));
        }
      });
      return;
    }

    const requestPath = req.url === "/" ? "/index.html" : req.url.split("?")[0];
    const filePath = path.normalize(path.join(root, decodeURIComponent(requestPath)));

    if (!filePath.startsWith(root)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      res.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
      res.end(data);
    });
  })
  .listen(port, host, () => {
    console.log(`Quiniela disponible en http://${host}:${port}`);
  });
