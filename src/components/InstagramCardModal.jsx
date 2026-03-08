import { useRef, useState } from 'react';
import { X, Download, Loader2 } from 'lucide-react';
import { QuoteCard } from './QuoteCard';
import { toPng } from 'html-to-image';

export function InstagramCardModal({ woman, onClose }) {
  const cardRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    if (!cardRef.current) return;

    setIsGenerating(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        quality: 1.0,
        pixelRatio: 1,
        cacheBust: true,
      });

      const link = document.createElement('a');
      link.download = `${woman.name.replace(/\s+/g, '_')}_quote.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Failed to generate image:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass rounded-[var(--radius-card)] p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Generate Instagram Card</h3>
          <button
            onClick={onClose}
            className="btn-icon w-10 h-10"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Preview */}
        <div className="mb-6">
          <p className="text-sm text-[var(--text-secondary)] mb-3">Preview</p>
          <div className="rounded-xl overflow-hidden border border-[var(--border-subtle)]">
            <QuoteCard woman={woman} variant="display" />
          </div>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          disabled={isGenerating}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Download size={18} />
              Download for Instagram
            </>
          )}
        </button>

        <p className="text-xs text-[var(--text-tertiary)] text-center mt-3">
          1080 x 1080px • Perfect for Instagram posts
        </p>

        {/* Hidden high-res card for export */}
        <div className="fixed -left-[9999px] top-0">
          <QuoteCard ref={cardRef} woman={woman} variant="export" />
        </div>
      </div>
    </div>
  );
}
