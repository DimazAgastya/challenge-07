import React from "react";
import Head from "next/head";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function download() {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	return (
		<div>
			<div>
				<h2 style={{ textAlign: "center" }}>Download Page</h2>
				<div>
					<Worker workerUrl="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js">
						<Viewer fileUrl="/dummy.pdf" plugins={[defaultLayoutPluginInstance]} />
					</Worker>
				</div>
			</div>
		</div>
	);
}
