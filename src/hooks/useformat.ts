import { useCallback } from "react";
import babylon from "prettier/parser-babel";
import { format, } from "prettier/standalone";

const useFormat = (codeValue: string, callback: (value: string) => void) => {

  const formatCode = useCallback(() => {
    const formattedCode = format(codeValue, {
      plugins: [babylon],
      semi: true,
      arrowParens: "always",
      bracketSpacing: true,
      endOfLine: "lf",
      htmlWhitespaceSensitivity: "css",
      insertPragma: false,
      jsxBracketSameLine: false,
      jsxSingleQuote: false,
      printWidth: 80,
      proseWrap: "preserve",
      quoteProps: "as-needed",
      requirePragma: false,
      singleQuote: false,
      tabWidth: 2,
      trailingComma: "es5",
      useTabs: false,
      vueIndentScriptAndStyle: false,
      parser: "babel",
    });

    callback(formattedCode)
  }, [codeValue, callback]);

  return formatCode;
};

export default useFormat;

/**
 *  private allRangeLanguages: string[] = [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "json",
    "graphql",
    "handlebars",
  ];
 */