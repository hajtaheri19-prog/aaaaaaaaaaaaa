"use client";

import React from 'react';
import { CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function BookReader() {
  return (
    <CardContent>
      <div className="space-y-3">
        <Badge>بتا</Badge>
        <p className="text-muted-foreground">
          نسخه اولیه «کتابخوان آنلاین (ترجمه)». به‌زودی امکانات کامل اضافه می‌شود.
        </p>
      </div>
    </CardContent>
  );
}


