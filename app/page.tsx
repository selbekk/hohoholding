import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-4">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-4xl mb-4">Ho Ho Holding AS</h1>
        <p>
          Et holdingselskap, eid av Kristofer og Anne Kristine Giltvedt Selbekk.
        </p>
        <hr />
        <p>
          Org. nr{" "}
          <a
            className="underline"
            href="https://www.proff.no/selskap/ho-ho-holding-as/oslo/-/IFFTRW30000"
          >
            933 576 051
          </a>
        </p>
        <div>
          <p>
            <a className="underline" href="mailto:kristofer@selbekk.io">
              kristofer@selbekk.io
            </a>
          </p>
          <p className="mb-4">
            <a className="underline" href="tel:+4792673134">
              +47 926 73 134
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
