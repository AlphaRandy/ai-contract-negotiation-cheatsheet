const Card = (props) => {
  if (props.isOutput) {
    return (
      <div className="card mx-4 bg-neutral text-neutral-content text-left rounded-xl shadow-lg">
        <div className="card-body h-96 ">
          <h3 className="text-xl font-bold">{props.title}</h3>
          <p className="text-l">{props.text}</p>
          <div className="grid grid-cols-3">
            <div>{props.content}</div>
            <div className="col-span-2 px-5 h-80 no-scrollbar no-scrollbar::-webkit-scrollbar overflow-y-auto">
              <div className="font-bold underline mb-5">
                {props.outputTitle}
              </div>
              <div className="">{props.output}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.isReference) {
    return (
      <div className="card mx-4 bg-neutral text-neutral-content text-left h-96 max-w-full rounded-xl shadow-lg">
        <div className="card-body">
          <h3 className="text-xl font-bold">{props.title}</h3>
          <p className="text-l">{props.text}</p>
          <div className>{props.content}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="card mx-4 bg-neutral text-neutral-content text-left rounded-xl shadow-lg">
      <div className="card-body">
        <h3 className="text-xl font-bold">{props.title}</h3>
        <p className="text-l">{props.text}</p>
        <div className="">{props.content}</div>
      </div>
    </div>
  );
};
export default Card;
diff --git a/src/pages/index.js b/src/pages/index.js
index 5958ebb..625497e 100644
--- a/src/pages/index.js
+++ b/src/pages/index.js
@@ -1,4 +1,5 @@
-import Head from "next/head";
+
+importimportimportimportimportimportimportimport Head from "next/head";
 import Image from "next/image";
 import Link from "next/link";
 import { useRouter } from "next/router";
diff --git a/src/public/logo_white.png b/src/public/logo_white.png
index 1bf7d28..d615660 100644
Binary files a/src/public/logo_white.png and b/src/public/logo_white.png differ
