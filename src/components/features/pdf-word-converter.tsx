"use client";

import React from 'react';
import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PdfWordConverter() {
  return (
    <CardContent>
      <div className="flex flex-col gap-3">
        <input type="file" accept=".pdf,.doc,.docx" className="block" />
        <div className="flex gap-2">
          <Button variant="secondary">PDF → Word</Button>
          <Button>Word → PDF</Button>
        </div>
      </div>
    </CardContent>
  );
}


