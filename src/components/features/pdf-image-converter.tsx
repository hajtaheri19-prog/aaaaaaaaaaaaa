"use client";

import React from 'react';
import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PdfImageConverter() {
  return (
    <CardContent>
      <div className="flex flex-col gap-3">
        <input type="file" accept=".pdf,image/*" className="block" />
        <div className="flex gap-2">
          <Button variant="secondary">PDF → Image</Button>
          <Button>Image → PDF</Button>
        </div>
      </div>
    </CardContent>
  );
}


