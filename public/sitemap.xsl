<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<title>XML Sitemap | Aureole PharmaTech</title>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<style type="text/css">
					body {
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
						font-size: 13px;
						color: #334155;
                        background: #f8fafc;
                        margin: 0;
                        padding: 20px;
					}
					a {
						color: #0ea5e9;
						text-decoration: none;
					}
					a:hover {
						text-decoration: underline;
					}
					#header {
						background-color: #0f172a;
						padding: 40px 20px;
						border-radius: 12px;
                        margin-bottom: 30px;
                        color: white;
                        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
					}
                    #header h1 {
                        margin: 0;
                        font-size: 24px;
                        font-weight: 900;
                        letter-spacing: -0.025em;
                        text-transform: uppercase;
                    }
                    #header p {
                        margin: 10px 0 0;
                        opacity: 0.7;
                        font-size: 14px;
                    }
					#content {
						background: white;
                        padding: 20px;
                        border-radius: 12px;
                        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
					}
					table {
						width: 100%;
						border-collapse: collapse;
					}
					th {
						text-align: left;
						padding: 12px 15px;
						border-bottom: 2px solid #e2e8f0;
                        text-transform: uppercase;
                        font-size: 11px;
                        letter-spacing: 0.05em;
                        color: #64748b;
					}
					td {
						padding: 12px 15px;
						border-bottom: 1px solid #f1f5f9;
					}
					tr:hover td {
						background-color: #f8fafc;
					}
				</style>
			</head>
			<body>
				<div id="header">
					<h1>XML Sitemap</h1>
					<p>Explorable index of all pages on Aureole PharmaTech.</p>
				</div>
				<div id="content">
					<table>
						<tr>
							<th width="100%">URL</th>
						</tr>
						<xsl:for-each select="sitemap:urlset/sitemap:url">
							<tr>
								<td>
									<xsl:variable name="itemURL">
										<xsl:value-of select="sitemap:loc"/>
									</xsl:variable>
									<a href="{$itemURL}">
										<xsl:value-of select="sitemap:loc"/>
									</a>
								</td>
							</tr>
						</xsl:for-each>
					</table>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
