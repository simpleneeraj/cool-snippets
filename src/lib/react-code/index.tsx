import * as React from "react";
import codemirror from "codemirror";

declare let global: any;
declare let require: any;

const SERVER_RENDERED =
  typeof navigator === "undefined" ||
  (typeof global !== "undefined" &&
    global["PREVENT_CODEMIRROR_RENDER"] === true);

let mirror: {
  (
    arg0: HTMLElement,
    arg1: codemirror.EditorConfiguration | undefined
  ): codemirror.Editor;
  (
    arg0: HTMLElement,
    arg1: codemirror.EditorConfiguration | undefined
  ): codemirror.Editor;
  defaults: any;
  defineMode: any;
};
if (!SERVER_RENDERED) {
  mirror = require("codemirror");
}

interface IDefineModeOptions {
  fn: () => codemirror.Mode<any>;
  name: string;
}

interface ISetScrollOptions {
  x?: number | null;
  y?: number | null;
}

interface ISetSelectionOptions {
  anchor: codemirror.Position;
  head: codemirror.Position;
}

interface DomEvent {
  (editor: codemirror.Editor, event?: any): void;
}

interface KeyHandledEvent {
  (editor: codemirror.Editor, name: string, event: any): void;
}

interface EditorChangeEvent {
  (editor: codemirror.Editor, changeObj: codemirror.EditorChange): void;
}

interface ICodeMirror {
  autoCursor?: boolean; // default: true
  autoScroll?: boolean; // default: false
  className?: string;
  cursor?: codemirror.Position;
  defineMode?: IDefineModeOptions;
  editorDidConfigure?: (editor: codemirror.Editor) => void;
  editorDidMount?: (
    editor: codemirror.Editor,
    value: string,
    cb: () => void
  ) => void;
  editorWillUnmount?: (lib: any) => void;
  onBlur?: DomEvent;
  onChange?: (
    editor: codemirror.Editor,
    data: codemirror.EditorChange,
    value: string
  ) => void;
  onContextMenu?: DomEvent;
  onCopy?: DomEvent;
  onCursor?: (editor: codemirror.Editor, data: codemirror.Position) => void;
  onCut?: DomEvent;
  onCursorActivity?: (editor: codemirror.Editor) => void;
  onDblClick?: DomEvent;
  onDragEnter?: DomEvent;
  onDragLeave?: DomEvent;
  onDragOver?: DomEvent;
  onDragStart?: DomEvent;
  onDrop?: DomEvent;
  onFocus?: DomEvent;
  onGutterClick?: (
    editor: codemirror.Editor,
    lineNumber: number,
    gutter: string,
    event: Event
  ) => void;
  onInputRead?: EditorChangeEvent;
  onKeyDown?: DomEvent;
  onKeyHandled?: KeyHandledEvent;
  onKeyPress?: DomEvent;
  onKeyUp?: DomEvent;
  onMouseDown?: DomEvent;
  onPaste?: DomEvent;
  onRenderLine?: (
    editor: codemirror.Editor,
    line: codemirror.LineHandle,
    element: HTMLElement
  ) => void;
  onScroll?: (editor: codemirror.Editor, data: codemirror.ScrollInfo) => void;
  onSelection?: (editor: codemirror.Editor, data: any) => void;
  onTouchStart?: DomEvent;
  onUpdate?: (editor: codemirror.Editor) => void;
  onViewportChange?: (
    editor: codemirror.Editor,
    start: number,
    end: number
  ) => void;
  options?: codemirror.EditorConfiguration;
  selection?: { ranges: Array<ISetSelectionOptions>; focus?: boolean };
  scroll?: ISetScrollOptions;
  style?: React.CSSProperties;
}

interface IControlledCodeMirror extends ICodeMirror {
  onBeforeChange: (
    editor: codemirror.Editor,
    data: codemirror.EditorChange,
    value: string
  ) => void;
  value: string;
}

interface IUnControlledCodeMirror extends ICodeMirror {
  detach?: boolean;
  editorDidAttach?: (editor: codemirror.Editor) => void;
  editorDidDetach?: (editor: codemirror.Editor) => void;
  onBeforeChange?: (
    editor: codemirror.Editor,
    data: codemirror.EditorChange,
    value: string,
    next: () => void
  ) => void;
  value?: string;
}

declare interface ICommon {
  wire: (props: IControlledCodeMirror | IUnControlledCodeMirror) => void;
  apply: (props: IControlledCodeMirror | IUnControlledCodeMirror) => void;
  applyNext: (
    props: IControlledCodeMirror | IUnControlledCodeMirror,
    next?: IControlledCodeMirror | IUnControlledCodeMirror,
    preserved?: IPreservedOptions
  ) => void;
  applyUserDefined: (
    props: IControlledCodeMirror | IUnControlledCodeMirror,
    preserved?: IPreservedOptions
  ) => void;
}

declare interface IPreservedOptions {
  cursor?: codemirror.Position;
}

abstract class Helper {
  // @ts-ignore
  public static equals(x: {}, y: {}) {
    const ok = Object.keys,
      tx = typeof x,
      ty = typeof y;
    return x && y && tx === "object" && tx === ty
      ? ok(x).length === ok(y).length &&
          // @ts-ignore
          ok(x).every((key) => this.equals(x[key], y[key]))
      : x === y;
  }
}

class Shared implements ICommon {
  private readonly editor: codemirror.Editor;
  private props: ICodeMirror;

  constructor(
    editor: codemirror.Editor,
    props:
      | ICodeMirror
      | Readonly<IControlledCodeMirror>
      | Readonly<IUnControlledCodeMirror>
  ) {
    this.editor = editor;
    this.props = props;
  }

  delegateCursor(
    position: codemirror.Position,
    scroll?: boolean,
    focus?: boolean
  ) {
    const doc = this.editor.getDoc() as codemirror.Doc;

    if (focus) {
      this.editor.focus();
    }
    scroll
      ? doc.setCursor(position)
      : // @ts-ignore
        doc.setCursor(position, null, { scroll: false });
  }

  delegateScroll(coordinates: ISetScrollOptions) {
    this.editor.scrollTo(coordinates.x, coordinates.y);
  }

  delegateSelection(ranges: Array<ISetSelectionOptions>, focus?: boolean) {
    const doc = this.editor.getDoc() as codemirror.Doc;
    doc.setSelections(ranges);

    if (focus) {
      this.editor.focus();
    }
  }

  public apply(props: IControlledCodeMirror | IUnControlledCodeMirror) {
    // init ranges
    if (props && props.selection && props.selection.ranges) {
      this.delegateSelection(
        props.selection.ranges,
        props.selection.focus || false
      );
    }

    // init cursor
    if (props && props.cursor) {
      this.delegateCursor(
        props.cursor,
        props.autoScroll || false,
        this.editor.getOption("autofocus") || false
      );
    }

    // init scroll
    if (props && props.scroll) {
      this.delegateScroll(props.scroll);
    }
  }

  public applyNext(
    props: IControlledCodeMirror | IUnControlledCodeMirror,
    next?: IControlledCodeMirror | IUnControlledCodeMirror,
    preserved?: any
  ) {
    // handle new ranges
    if (props && props.selection && props.selection.ranges) {
      if (
        next &&
        next.selection &&
        next.selection.ranges &&
        !Helper.equals(props.selection.ranges, next.selection.ranges)
      ) {
        this.delegateSelection(
          next.selection.ranges,
          next.selection.focus || false
        );
      }
    }

    // handle new cursor
    if (props && props.cursor) {
      if (next && next.cursor && !Helper.equals(props.cursor, next.cursor)) {
        this.delegateCursor(
          preserved.cursor || next.cursor,
          next.autoScroll || false,
          next.autoCursor || false
        );
      }
    }

    // handle new scroll
    if (props && props.scroll) {
      if (next && next.scroll && !Helper.equals(props.scroll, next.scroll)) {
        this.delegateScroll(next.scroll);
      }
    }
  }

  public applyUserDefined(
    props: IControlledCodeMirror | IUnControlledCodeMirror,
    preserved?: any
  ) {
    if (preserved && preserved.cursor) {
      this.delegateCursor(
        preserved.cursor,
        props.autoScroll || false,
        this.editor.getOption("autofocus") || false
      );
    }
  }

  public wire(props: IControlledCodeMirror | IUnControlledCodeMirror) {
    Object.keys(props || {})
      .filter((p) => /^on/.test(p))
      .forEach((prop) => {
        switch (prop) {
          case "onBlur":
            return (this.editor as any).on("blur", (_cm: any, event: any) => {
              if (typeof this.props.onBlur === "undefined") return;
              this.props.onBlur(this.editor, event);
            });

          case "onContextMenu": {
            return this.editor.on("contextmenu", (_cm, event) => {
              if (typeof this.props.onContextMenu === "undefined") return;
              this.props.onContextMenu(this.editor, event);
            });
          }
          case "onCopy": {
            return this.editor.on("copy", (_cm, event?) => {
              if (typeof this.props.onCopy === "undefined") return;
              this.props.onCopy(this.editor, event);
            });
          }
          case "onCursor":
            return this.editor.on("cursorActivity", () => {
              if (typeof this.props.onCursor === "undefined") return;
              this.props.onCursor(
                this.editor,
                this.editor.getDoc().getCursor()
              );
            });
          case "onCursorActivity":
            return this.editor.on("cursorActivity", () => {
              if (typeof this.props.onCursorActivity === "undefined") return;
              this.props.onCursorActivity(this.editor);
            });
          case "onCut": {
            return this.editor.on("cut", (_cm, event?) => {
              if (typeof this.props.onCut === "undefined") return;
              this.props.onCut(this.editor, event);
            });
          }
          case "onDblClick": {
            return this.editor.on("dblclick", (_cm, event) => {
              if (typeof this.props.onDblClick === "undefined") return;
              this.props.onDblClick(this.editor, event);
            });
          }
          case "onDragEnter":
            return this.editor.on("dragenter", (_cm, event) => {
              if (typeof this.props.onDragEnter === "undefined") return;
              this.props.onDragEnter(this.editor, event);
            });

          case "onDragLeave": {
            this.editor.on("dragleave", (_cm, event) => {
              if (typeof this.props.onDragLeave === "undefined") return;
              this.props.onDragLeave(this.editor, event);
            });
            break;
          }
          case "onDragOver":
            return this.editor.on("dragover", (_cm, event) => {
              if (typeof this.props.onDragOver === "undefined") return;
              this.props.onDragOver(this.editor, event);
            });

          case "onDragStart": {
            this.editor.on("dragstart", (_cm, event) => {
              if (typeof this.props.onDragStart === "undefined") return;
              this.props.onDragStart(this.editor, event);
            });
            break;
          }
          case "onDrop":
            return this.editor.on("drop", (_cm, event) => {
              if (typeof this.props.onDrop === "undefined") return;
              this.props.onDrop(this.editor, event);
            });

          case "onFocus":
            return (this.editor as any).on("focus", (_cm: any, event: any) => {
              if (typeof this.props.onFocus === "undefined") return;
              this.props.onFocus(this.editor, event);
            });
          case "onGutterClick":
            return this.editor.on(
              "gutterClick",
              (_cm, lineNumber, gutter, event) => {
                if (typeof this.props.onGutterClick === "undefined") return;
                this.props.onGutterClick(
                  this.editor,
                  lineNumber,
                  gutter,
                  event
                );
              }
            );
          case "onInputRead":
            return this.editor.on("inputRead", (_cm, EditorChangeEvent) => {
              if (typeof this.props.onInputRead === "undefined") return;
              this.props.onInputRead(this.editor, EditorChangeEvent);
            });
          case "onKeyDown":
            return this.editor.on("keydown", (_cm, event) => {
              if (typeof this.props.onKeyDown === "undefined") return;
              this.props.onKeyDown(this.editor, event);
            });
          case "onKeyHandled":
            return this.editor.on("keyHandled", (_cm, key, event) => {
              if (typeof this.props.onKeyHandled === "undefined") return;
              this.props.onKeyHandled(this.editor, key, event);
            });
          case "onKeyPress":
            return this.editor.on("keypress", (_cm, event) => {
              if (typeof this.props.onKeyPress === "undefined") return;
              this.props.onKeyPress(this.editor, event);
            });
          case "onKeyUp":
            return this.editor.on("keyup", (_cm, event) => {
              if (typeof this.props.onKeyUp === "undefined") return;
              this.props.onKeyUp(this.editor, event);
            });
          case "onMouseDown": {
            return this.editor.on("mousedown", (_cm, event) => {
              if (typeof this.props.onMouseDown === "undefined") return;
              this.props.onMouseDown(this.editor, event);
            });
          }
          case "onPaste": {
            return this.editor.on("paste", (_cm, event?) => {
              if (typeof this.props.onPaste === "undefined") return;
              this.props.onPaste(this.editor, event);
            });
          }
          case "onRenderLine": {
            return this.editor.on("renderLine", (_cm, line, element) => {
              if (typeof this.props.onRenderLine === "undefined") return;
              this.props.onRenderLine(this.editor, line, element);
            });
          }
          case "onScroll":
            return this.editor.on("scroll", () => {
              if (typeof this.props.onScroll === "undefined") return;
              this.props.onScroll(this.editor, this.editor.getScrollInfo());
            });

          case "onSelection":
            return this.editor.on("beforeSelectionChange", (_cm, data) => {
              if (typeof this.props.onSelection === "undefined") return;
              this.props.onSelection(this.editor, data);
            });

          case "onTouchStart": {
            this.editor.on("touchstart", (_cm, event) => {
              if (typeof this.props.onTouchStart === "undefined") return;
              this.props.onTouchStart(this.editor, event);
            });
            break;
          }
          case "onUpdate":
            return this.editor.on("update", () => {
              if (typeof this.props.onUpdate === "undefined") return;
              this.props.onUpdate(this.editor);
            });

          case "onViewportChange":
            return this.editor.on("viewportChange", (_cm, from, to) => {
              if (typeof this.props.onViewportChange === "undefined") return;
              this.props.onViewportChange(this.editor, from, to);
            });

          default:
            return true;
        }
      });
  }
}

class Controlled extends React.Component<IControlledCodeMirror, any> {
  /** @internal */
  private appliedNext: boolean = false;
  /** @internal */
  private deferred: any;
  /** @internal */
  private editor!: codemirror.Editor;
  /** @internal */
  private emulating: boolean = false;
  /** @internal */
  private hydrated: boolean = false;
  /** @internal */
  private initCb!: () => void;
  /** @internal */
  private mirror: any;
  /** @internal */
  private mounted: boolean = false;
  /** @internal */
  private ref!: HTMLElement;
  /** @internal */
  private shared!: Shared;

  /** @internal */
  constructor(props: IControlledCodeMirror) {
    super(props);

    if (SERVER_RENDERED) return;

    this.appliedNext = false;
    this.deferred = null;
    this.emulating = false;
    this.hydrated = false;
    this.initCb = () => {
      if (this.props.editorDidConfigure) {
        this.props.editorDidConfigure(this.editor);
      }
    };
    this.mounted = false;
  }

  /** @internal */
  private hydrate(props: Readonly<IControlledCodeMirror>) {
    const _options = props && props.options ? props.options : {};

    const userDefinedOptions = Object.assign(
      {},
      mirror.defaults,
      (this.editor as any).options,
      _options
    );

    const optionDelta = Object.keys(userDefinedOptions).some(
      (key) => this.editor.getOption(key as any) !== userDefinedOptions[key]
    );

    if (optionDelta) {
      Object.keys(userDefinedOptions).forEach((key) => {
        if (_options.hasOwnProperty(key)) {
          if (this.editor.getOption(key as any) !== userDefinedOptions[key]) {
            this.editor.setOption(key as any, userDefinedOptions[key]);
            this.mirror.setOption(key as any, userDefinedOptions[key]);
          }
        }
      });
    }
    if (!this.hydrated) {
      this.deferred
        ? this.resolveChange(props.value)
        : this.initChange(props.value || "");
    }
    this.hydrated = true;
  }

  /** @internal */
  private initChange(value: any) {
    this.emulating = true;

    const doc = this.editor.getDoc();
    const lastLine = doc.lastLine();
    const lastChar = doc.getLine(doc.lastLine()).length;

    doc.replaceRange(
      value || "",
      { line: 0, ch: 0 },
      { line: lastLine, ch: lastChar }
    );

    this.mirror.setValue(value);
    doc.clearHistory();
    this.mirror.clearHistory();

    this.emulating = false;
  }

  /** @internal */
  private resolveChange(value: string) {
    this.emulating = true;

    const doc = this.editor.getDoc();

    if (this.deferred.origin === "undo") {
      doc.undo();
    } else if (this.deferred.origin === "redo") {
      doc.redo();
    } else {
      doc.replaceRange(
        this.deferred.text,
        this.deferred.from,
        this.deferred.to,
        this.deferred.origin
      );
    }

    if (value && value !== doc.getValue()) {
      const cursor = doc.getCursor();
      doc.setValue(value);
      doc.setCursor(cursor);
    }

    this.emulating = false;
    this.deferred = null;
  }

  /** @internal */
  private mirrorChange(deferred: {
    origin: string;
    text: any;
    from: any;
    to: any;
  }) {
    const doc = this.editor.getDoc();

    if (deferred.origin === "undo") {
      doc.setHistory(this.mirror.getHistory());
      this.mirror.undo();
    } else if (deferred.origin === "redo") {
      doc.setHistory(this.mirror.getHistory());
      this.mirror.redo();
    } else {
      this.mirror.replaceRange(
        deferred.text,
        deferred.from,
        deferred.to,
        deferred.origin
      );
    }

    return this.mirror.getValue();
  }

  /** @internal */
  public componentDidMount() {
    if (SERVER_RENDERED) return;

    if (this.props.defineMode) {
      if (this.props.defineMode.name && this.props.defineMode.fn) {
        mirror.defineMode(this.props.defineMode.name, this.props.defineMode.fn);
      }
    }

    this.editor = mirror(this.ref, this.props.options) as codemirror.Editor;

    this.shared = new Shared(this.editor, this.props);

    this.mirror = (mirror as any)(() => {}, this.props.options);

    this.editor.on("electricInput", () => {
      this.mirror.setHistory(this.editor.getDoc().getHistory());
    });

    this.editor.on("cursorActivity", () => {
      this.mirror.setCursor(this.editor.getDoc().getCursor());
    });

    this.editor.on("beforeChange", (_cm, data) => {
      if (this.emulating) {
        return;
      }

      data.cancel();

      this.deferred = data;

      let phantomChange = this.mirrorChange(this.deferred);

      if (this.props.onBeforeChange)
        this.props.onBeforeChange(this.editor, this.deferred, phantomChange);
    });

    this.editor.on("change", (_cm, data) => {
      if (!this.mounted) {
        return;
      }

      if (this.props.onChange) {
        this.props.onChange(this.editor, data, this.editor.getValue());
      }
    });

    this.hydrate(this.props);

    this.shared.apply(this.props);

    this.mounted = true;

    this.shared.wire(this.props);

    if (this.editor.getOption("autofocus")) {
      this.editor.focus();
    }

    if (this.props.editorDidMount) {
      this.props.editorDidMount(
        this.editor,
        this.editor.getValue(),
        this.initCb
      );
    }
  }

  /** @internal */
  public componentDidUpdate(
    prevProps: IControlledCodeMirror | IUnControlledCodeMirror
  ) {
    if (SERVER_RENDERED) return;

    let preserved: IPreservedOptions = { cursor: undefined };

    if (this.props.value !== prevProps.value) {
      this.hydrated = false;
    }

    if (!this.props.autoCursor && this.props.autoCursor !== undefined) {
      preserved.cursor = this.editor.getDoc().getCursor();
    }

    this.hydrate(this.props);

    if (!this.appliedNext) {
      this.shared.applyNext(prevProps, this.props, preserved);
      this.appliedNext = true;
    }

    this.shared.applyUserDefined(prevProps, preserved);
  }

  /** @internal */
  public componentWillUnmount() {
    if (SERVER_RENDERED) return;

    if (this.props.editorWillUnmount) {
      this.props.editorWillUnmount(mirror);
    }
  }

  /** @internal */
  public shouldComponentUpdate(_nextProps: any, _nextState: any) {
    return !SERVER_RENDERED;
  }

  /** @internal */
  public render() {
    if (SERVER_RENDERED) return null;
    let className = this.props.className
      ? `react-code ${this.props.className}`
      : `react-code`;
    // @ts-ignore
    return <div className={className} ref={(self) => (this.ref = self)} />;
  }
}

export default Controlled;
