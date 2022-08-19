import { Box } from "@chakra-ui/react";
import {
  SandpackProvider,
  ClasserProvider,
  SandpackPreview,
  useActiveCode,
  SandpackLayout,
  SandpackStack,
  FileTabs,
  useSandpack,
} from "@codesandbox/sandpack-react";

import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";

const BASE_CODE = `import React from "react";
import Component from "./Component";

export default function App() {
    return (
        <div className="h-screen w-screen max-h-screen max-w-screen flex flex-col items-center justify-center">
            <Component />
        </div>
    );
}`;

function MonacoEditor() {
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();

  const language = "javascript";

  return (
    <SandpackStack
      customStyle={{
        height: "100vh",
        margin: 0,
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          flex: 1,
          paddingTop: 8,
          background: "#1e1e1e",
          borderRadius: "10px",
        }}
      >
        <Editor
          width="100%"
          height="100%"
          language={language}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
          }}
          key={sandpack.activePath}
          defaultValue={code}
          onChange={(value) => updateCode(value || "")}
        />
      </div>
    </SandpackStack>
  );
}

export default function MySandpack() {
  const [code, setCode] = useState(BASE_CODE);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={"100%"}
      justifyContent="space-between"
    >
      <SandpackProvider
        template="react"
        theme={"dark"}
        files={DEFAULT_FILES}
        options={{
          externalResources: [
            "https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css",
          ],
        }}
        customSetup={{
          dependencies: {
            react: "^18",
            "react-dom": "^18",
            "@superui/styles": "latest",
          },
          environment: "parcel",
        }}
      >
        <SandpackLayout>
          <MonacoEditor />
          <SandpackPreview customStyle={{ height: "100vh" }} />
        </SandpackLayout>
      </SandpackProvider>
    </Box>
  );
}

const COMPONENT_CODE = `import React from "react";
import { Button } from "@superui/styles";

export default function Component() {
  return (
    <div className="w-2/4 bg-white rounded">
      <h1>Hello World</h1>
    </div>
  )
}`;

const DEFAULT_FILES = {
  "/App.js": {
    code: BASE_CODE,
    hidden: true,
  },
  "/Component.js": {
    code: COMPONENT_CODE,
    hidden: false,
    active: true,
  },
};
