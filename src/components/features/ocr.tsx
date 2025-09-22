"use client";

import React from 'react';
import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function OCR() {
  return (
    <CardContent>
      <div className="flex flex-col gap-3">
        <input type="file" accept="image/*,application/pdf" className="block" />
        <Button>استخراج متن</Button>
        <Textarea placeholder="خروجی متن اینجا نمایش داده می‌شود" rows={6} />
      </div>
    </CardContent>
  );
}


