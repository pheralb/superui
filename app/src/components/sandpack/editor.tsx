/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box } from "@chakra-ui/react";
import {
  SandpackProvider,
  SandpackPreview,
  useActiveCode,
  SandpackLayout,
  SandpackStack,
  useSandpack,
} from "@codesandbox/sandpack-react";
import MonacoEditor, { OnMount, Monaco } from "@monaco-editor/react";
import {
  configureMonacoTailwindcss,
  tailwindcssData,
} from "monaco-tailwindcss";
import {
  AutoTypings,
  LocalStorageCache,
} from "monaco-editor-auto-typings/custom-editor";

function Editor({
  onChange,
  isPreview,
}: {
  onChange: (code: string) => void;
  isPreview?: boolean;
}) {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();

  onChange(code);

  const handleEditorDidMount: OnMount = async (editor, monaco) => {
    monaco.languages.css.cssDefaults.setOptions({
      data: {
        dataProviders: {
          tailwindcssData,
        },
      },
    });

    configureMonacoTailwindcss(monaco);

    // Disable the auto-completion until package is uploaded to @types
    /* await AutoTypings.create(editor, {
      sourceCache: new LocalStorageCache(), // Cache loaded sources in localStorage. May be omitted
      monaco: monaco,
    }); */
  };

  return (
    <SandpackStack style={{ height: "75vh", margin: 0 }}>
      <div
        style={{
          flex: 1,
          paddingTop: 8,
          background: "#1e1e1e",
          maxHeight: "100vh",
        }}
      >
        <MonacoEditor
          width="100%"
          language="javascript"
          theme="vs-dark"
          onMount={handleEditorDidMount}
          key={sandpack.activeFile}
          defaultValue={code}
          onChange={(value) => updateCode(value || "")}
          options={{
            useShadowDOM: false,
            acceptSuggestionOnCommitCharacter: true,
            acceptSuggestionOnEnter: "on",
            accessibilitySupport: "auto",
            autoIndent: "full",
            automaticLayout: true,
            codeLens: true,
            colorDecorators: true,
            contextmenu: true,
            cursorBlinking: "blink",
            cursorSmoothCaretAnimation: false,
            cursorStyle: "line",
            disableLayerHinting: false,
            disableMonospaceOptimizations: false,
            dragAndDrop: false,
            fixedOverflowWidgets: false,
            folding: true,
            foldingStrategy: "auto",
            fontLigatures: false,
            formatOnPaste: false,
            formatOnType: false,
            hideCursorInOverviewRuler: false,
            links: true,
            mouseWheelZoom: false,
            multiCursorMergeOverlapping: true,
            multiCursorModifier: "alt",
            overviewRulerBorder: true,
            overviewRulerLanes: 2,
            quickSuggestions: true,
            quickSuggestionsDelay: 100,
            readOnly: isPreview || false,
            renderControlCharacters: false,
            renderFinalNewline: true,
            renderLineHighlight: "all",
            renderWhitespace: "none",
            revealHorizontalRightPadding: 30,
            roundedSelection: true,
            rulers: [],
            scrollBeyondLastColumn: 5,
            scrollBeyondLastLine: true,
            selectOnLineNumbers: true,
            selectionClipboard: true,
            selectionHighlight: true,
            showFoldingControls: "mouseover",
            smoothScrolling: false,
            suggestOnTriggerCharacters: true,
            wordBasedSuggestions: true,
            wordSeparators: "~!@#$%^&*()-=+[{]}|;:'\",.<>/?",
            wordWrap: "off",
            wordWrapBreakAfterCharacters: "\t})]?|&,;",
            wordWrapBreakBeforeCharacters: "{([+",
            wordWrapColumn: 80,
            wrappingIndent: "none",
            minimap: { enabled: false },
          }}
        />
      </div>
    </SandpackStack>
  );
}

export default function MySandpack({
  setCode,
  defaultCode,
  isPreview,
}: {
  setCode: (code: string) => void;
  defaultCode?: string;
  isPreview?: boolean;
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={"100%"}
      justifyContent="space-between"
    >
      <SandpackProvider
        customSetup={{
          entry: "/src/index.tsx",
          dependencies: {
            react: "latest",
            "react-dom": "latest",
            "react-scripts": "4.0.0",
            "@superui/styles": "0.0.4",
          },
          devDependencies: {
            "@types/react": "latest",
            "@types/react-dom": "latest",
            "@types/react-scripts": "latest",
          },
        }}
        files={{
          "./tsconfig.json": {
            code: `{
"include": [
  "./src/**/*"
],
"compilerOptions": {
  "strict": true,
  "esModuleInterop": true,
  "lib": [
    "dom",
    "es2015"
  ],
  "jsx": "react"
}
}`,
            hidden: true,
          },
          "/public/index.html": {
            code: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<div id="root"></div>
</body>
</html>`,
            hidden: true,
          },
          "/src/index.tsx": {
            code: `import * as React from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./main";
const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<Main />);
        `,
            hidden: true,
          },
          "/src/main.tsx": {
            code: `import * as React from "react";
import { SuperUIProvider, ToastProvider } from "@superui/styles";
import "@superui/styles/dist/styles/main.css";
import Component from "./Component";

export const Main: React.FC = () => {
  return (
    <SuperUIProvider>
      <ToastProvider>
        <div className="w-screen h-screen flex flex-col items-center gap-2 justify-center">
          <Component />
        </div>
      </ToastProvider>
    </SuperUIProvider>
  )
}`,
            hidden: true,
            active: false,
          },
          "/src/Component.tsx": {
            code:
              defaultCode ||
              `import * as React from "react";
import { Button } from "@superui/styles";

/**
* This is a template for a custom SuperUI component.
* The only rule is to export the component as "default" (as the export in the bottom of this code)
* You can use classNames from TailwindCSS to style your component, but not custom CSS.
* Workaround for custom CSS is to use Arbitrary properties https://tailwindcss.com/docs/adding-custom-styles#arbitrary-properties.
*/

const Main = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Start editing!</h1>
      <p className="text-xl">
        Edit the code in the left panel and see your changes in the preview.
      </p>
      <p className="inline-flex">
      You can use
        <kbd key="COMMAND" className="mx-1 px-0.5 border rounded bg-gray-500 bg-opacity-25">CMD</kbd>
        {" + "}
        <kbd key="K" className="mx-1 px-0.5 border rounded bg-gray-500 bg-opacity-25">K</kbd>
        to copy the imports snippets.
      </p>
      <Button
        variant="primary"
        className="w-full max-w-sm"
        onClick={() => alert("Hello World!")}
      >
        Hello
      </Button>
    </>
  )
}
export default Main;`,
            active: true,
          },
        }}
        options={{
          activeFile: "/src/Component.tsx",
          externalResources: [
            "https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css",
          ],
          classes: {
            "sp-wrapper":
              "!w-full !h-3/4 !flex flex-col items-center justify-center",
            "sp-layout": "w-full",
            "sp-tab-button": "custom-tab",
            "sp-stack": "!h-[68vh]",
          },
        }}
        theme="dark"
      >
        <SandpackLayout>
          <Editor onChange={setCode} isPreview={isPreview} />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </Box>
  );
}

window.MonacoEnvironment = {
  // @ts-ignore-next-line
  getWorker(moduleId, label) {
    switch (label) {
      case "editorWorkerService":
        return new Worker(
          new URL("monaco-editor/esm/vs/editor/editor.worker", import.meta.url)
        );
      case "css":
      case "less":
      case "scss":
        return new Worker(
          new URL(
            "monaco-editor/esm/vs/language/css/css.worker",
            import.meta.url
          )
        );
      case "handlebars":
      case "html":
      case "razor":
        return new Worker(
          new URL(
            "monaco-editor/esm/vs/language/html/html.worker",
            import.meta.url
          )
        );
      case "json":
        return new Worker(
          new URL(
            "monaco-editor/esm/vs/language/json/json.worker",
            import.meta.url
          )
        );
      case "javascript":
      case "typescript":
        return new Worker(
          new URL(
            "monaco-editor/esm/vs/language/typescript/ts.worker",
            import.meta.url
          )
        );
      case "tailwindcss":
        return new Worker(
          new URL("monaco-tailwindcss/tailwindcss.worker", import.meta.url)
        );
      default:
        throw new Error(`Unknown label ${label}`);
    }
  },
};
