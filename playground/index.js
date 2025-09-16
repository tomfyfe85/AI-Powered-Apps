import { get_encoding } from "tiktoken";

// token ID -> token
const encoding = get_encoding("cl100k_base");
const tokens = encoding.encode("Rest in peace, Ozzy Osbourne. Ozzy forever!");
console.log(tokens);
