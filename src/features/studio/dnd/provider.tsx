'use client';

/**
 * DndProvider wrapper — wraps the entire editor in the HTML5 backend.
 * Keeps Next.js `'use client'` isolated to this file so the provider
 * can be imported anywhere without infecting server components.
 */
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export function EditorDndProvider({ children }: { children: React.ReactNode }) {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
}
