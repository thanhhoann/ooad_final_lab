import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-accent-1 border-accent-2">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="mb-10 text-4xl font-bold leading-tight tracking-tighter text-center lg:text-5xl lg:text-left lg:mb-0 lg:pr-4 lg:w-1/2">
            Made by &nbsp;
            <Link href="https://github.com/thanhhoann">
              <a>@thanhhoann</a>
            </Link>
          </h3>
          <div className="flex flex-col items-center justify-center lg:flex-row lg:pl-4 lg:w-1/2">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/15VAokWSspi-wa26znOgclxZwn8IrxgKoziJWVps64Bo/edit?usp=sharing"
              className="px-12 py-3 mx-3 mb-6 font-bold text-white bg-black border border-black hover:bg-white hover:text-black lg:px-8 duration-200 transition-colors lg:mb-0"
            >
              Read documentation
            </a>
            <a
              target="_blank"
              href={`https://github.com/thanhhoann/ooad_final_lab`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
