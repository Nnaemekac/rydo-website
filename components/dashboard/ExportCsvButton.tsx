'use client';

import { toCsv, downloadCsv, type CsvColumn } from '@/lib/csv';
import { useToast } from '@/components/ToastProvider';

export default function ExportCsvButton<T extends Record<string, unknown>>({
  rows,
  columns,
  filename,
  label,
  emptyMessage,
}: {
  rows: T[];
  columns: CsvColumn<T>[];
  filename: string;
  label?: string;
  emptyMessage: string;
}) {
  const { showToast } = useToast();

  function handleExport() {
    if (rows.length === 0) {
      showToast(emptyMessage, 'error');
      return;
    }
    downloadCsv(filename, toCsv(rows, columns));
  }

  return (
    <button className="mot-export-btn" onClick={handleExport}>
      <i className="fa-solid fa-download"></i> {label || 'Export CSV'}
    </button>
  );
}
