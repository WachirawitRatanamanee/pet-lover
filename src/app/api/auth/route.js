import bcrypt from "bcrypt";

let users = [
  {
    username: "admin",
    password: "$2b$10$uoYdSwiAWWQflBn3snvpI.n8ROSCorSSnNdzyjjltq95mZsi3uNsG", // admin
  },
  {
    username: "user",
    password: "$2b$10$B1/UuXZVUsqA8Xr9MztBquAA5aHKVjSFLGORY2gzXFXkPktyy258C", // user
  },
];

export const GET = async (req, res) => {
  return new Response(JSON.stringify({ message: "hi" }), { status: 200 });
};

export const POST = async (req, res) => {
  const formData = await req.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const hashedPassword = await bcrypt.hash(password, 10);
  //save to database
  users.push({ username, password: hashedPassword });
  return new Response(JSON.stringify({ message: "Successful" }), {
    status: 201,
  });
};

export const PUT = async (req, res) => {
  return new Response(JSON.stringify({ message: "hi" }), { status: 200 });
};

// temp for login
// in real world, use next/auth for authentication
export const DELETE = async (req, res) => {
  const formData = await req.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  //compare with database
  let user = users.find((user) => user.username === username);

  if (!user) {
    return new Response(JSON.stringify({ message: "Username or password was wrong" }), {
      status: 401,
    });
  }

  const passwordMatches = await bcrypt.compare(password, user.password);
  if (user && passwordMatches) {
    return new Response(JSON.stringify({ message: "Successful" }), {
      status: 200,
    });
  }

  return new Response(JSON.stringify({ message: "Username or password was wrong" }), { status: 401 });
};
