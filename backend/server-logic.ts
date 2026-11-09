export {};

interface Request {
  method: string;
  body: Record<string, unknown>;
}

interface Response {
  status: number;
  data: unknown;
}
interface Request {
  method: string;
  body: Record<string, unknown>;
}

interface Response {
  status: number;
  data: unknown;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function handleRequest(req: Request): Promise<Response> {
  await delay(500);

  if (req.method === "GET") {
    return {
      status: 200,
      data: "OK"
    };
  }

  if (req.method === "POST" && req.body.title) {
    return {
      status: 201,
      data: req.body
    };
  }

  return {
    status: 400,
    data: "Unsupported method"
  };
}

async function main(): Promise<void> {
  const getRequest: Request = {
    method: "GET",
    body: {}
  };

  const postRequest: Request = {
    method: "POST",
    body: {
      title: "Новая задача",
      priority: "high"
    }
  };

  const deleteRequest: Request = {
    method: "DELETE",
    body: {}
  };

  console.log("GET:", await handleRequest(getRequest));
  console.log("POST:", await handleRequest(postRequest));
  console.log("DELETE:", await handleRequest(deleteRequest));
}

main();