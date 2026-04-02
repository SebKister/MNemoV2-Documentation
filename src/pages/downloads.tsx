import React from 'react';
import Layout from '@theme/Layout';
import versions from '../data/pdfVersions.json';

type PdfVersion = {
  version: string;
  filename: string;
  date: string;
};

export default function Downloads(): React.ReactElement {
  const sorted = [...(versions as PdfVersion[])].sort((a, b) =>
    b.version.localeCompare(a.version, undefined, { numeric: true })
  );

  return (
    <Layout title="Downloads" description="MNemo user manual PDF downloads">
      <main className="container margin-vert--xl">
        <h1>User Manual Downloads</h1>
        <p>PDF versions of the MNemo user manual, one per firmware release.</p>
        {sorted.length === 0 ? (
          <p><em>No PDFs available yet.</em></p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Version</th>
                <th>Date</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((entry) => (
                <tr key={entry.version}>
                  <td>{entry.version}</td>
                  <td>{entry.date}</td>
                  <td>
                    <a href={`/MNemoV2-Documentation/pdf/${entry.filename}`} download>
                      {entry.filename}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </Layout>
  );
}
