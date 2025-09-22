"use client";

import React, { useMemo, useState } from 'react';
import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Piece = string; // e.g., 'wP', 'bK', ''
type Board = Piece[][]; // 8x8

const initialBoard: Board = [
  ['bR','bN','bB','bQ','bK','bB','bN','bR'],
  ['bP','bP','bP','bP','bP','bP','bP','bP'],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['','','','','','','',''],
  ['wP','wP','wP','wP','wP','wP','wP','wP'],
  ['wR','wN','wB','wQ','wK','wB','wN','wR'],
];

function pieceToChar(p: Piece): string {
  const map: Record<string, string> = {
    wK: '♔', wQ: '♕', wR: '♖', wB: '♗', wN: '♘', wP: '♙',
    bK: '♚', bQ: '♛', bR: '♜', bB: '♝', bN: '♞', bP: '♟',
    '': '',
  };
  return map[p] ?? '';
}

export default function Chess() {
  const [board, setBoard] = useState<Board>(initialBoard);
  const [whiteTurn, setWhiteTurn] = useState(true);
  const [selected, setSelected] = useState<{r: number; c: number} | null>(null);

  const turnLabel = whiteTurn ? 'سفید' : 'سیاه';

  const onSquareClick = (r: number, c: number) => {
    if (!selected) {
      const piece = board[r][c];
      if (!piece) return;
      const isWhite = piece.startsWith('w');
      if ((isWhite && !whiteTurn) || (!isWhite && whiteTurn)) return;
      setSelected({ r, c });
      return;
    }
    if (selected.r === r && selected.c === c) {
      setSelected(null);
      return;
    }
    // Very naive move: allow any move if destination is empty or opponent
    const b = board.map(row => row.slice());
    const fromPiece = b[selected.r][selected.c];
    const toPiece = b[r][c];
    if (!fromPiece) { setSelected(null); return; }
    const fromWhite = fromPiece.startsWith('w');
    const toWhite = toPiece ? toPiece.startsWith('w') : null;
    if (toPiece && fromWhite === toWhite) { setSelected(null); return; }
    b[selected.r][selected.c] = '';
    b[r][c] = fromPiece;
    setBoard(b);
    setSelected(null);
    setWhiteTurn(!whiteTurn);
  };

  const reset = () => {
    setBoard(initialBoard);
    setWhiteTurn(true);
    setSelected(null);
  };

  return (
    <CardContent>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="inline-grid grid-cols-8 border rounded-lg overflow-hidden">
          {board.map((row, r) => row.map((p, c) => {
            const dark = (r + c) % 2 === 1;
            const isSel = selected && selected.r === r && selected.c === c;
            return (
              <button
                key={`${r}-${c}`}
                onClick={() => onSquareClick(r, c)}
                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-xl transition-colors ${dark ? 'bg-muted' : 'bg-background'} ${isSel ? 'ring-2 ring-primary' : ''}`}
                aria-label={`square-${r}-${c}`}
              >
                <span>{pieceToChar(p)}</span>
              </button>
            );
          }))}
        </div>
        <div className="space-y-3">
          <div>نوبت: <span className="font-semibold">{turnLabel}</span></div>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={reset}>شروع مجدد</Button>
          </div>
          <p className="text-sm text-muted-foreground">نسخه اولیه بازی شطرنج (لوکال). قوانین حرکت کامل نیستند؛ به‌زودی ارتقاء می‌یابد.</p>
        </div>
      </div>
    </CardContent>
  );
}
