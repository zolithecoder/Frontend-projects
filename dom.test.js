import fs from 'fs';
import path from 'path';

import { expect, it, vi, beforeEach } from 'vitest';
import { Window } from 'happy-dom';
import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

//const Window = new Window();
const document = window.document;
vi.stubGlobal('document', document);
beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlDocumentContent);
});

it('should add an error paragraph to the id=errors', () => {
  showError('Test');
  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;
  expect(errorParagraph).not.toBeNull();
});
