import axios from "axios";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnR2MjRhZnJpY2EuY29tXC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTYxNDU0MjMwNCwiZXhwIjoxNjE0NTQ1OTA0LCJuYmYiOjE2MTQ1NDIzMDQsImp0aSI6InRFQXhveEt1Q2E3ZmZtY0IiLCJzdWIiOjMwLCJwcnYiOiJmNjRkNDhhNmNlYzdiZGZhN2ZiZjg5OTQ1NGI0ODhiM2U0NjI1MjBhIn0.IM8fiNwGgllt4J4tk0YNwIm37Suao5PiRtdwue4ePfk";

const privateAxios = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export const makerequest = () => {
  privateAxios
    .get("https://api.tv24africa.com/api/v1/categories?category=sports")
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
};
