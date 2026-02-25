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
					* { box-sizing: border-box; }
					body {
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
						font-size: 13px;
						color: #334155;
                        background: #f1f5f9;
                        margin: 0;
                        padding: 24px;
					}
					a {
						color: #0ea5e9;
						text-decoration: none;
					}
					a:hover {
						text-decoration: underline;
					}
					#header {
						background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
						padding: 36px 32px;
						border-radius: 14px;
                        margin-bottom: 28px;
                        color: white;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
					}
                    #header h1 {
                        margin: 0 0 6px;
                        font-size: 22px;
                        font-weight: 900;
                        letter-spacing: -0.025em;
                        text-transform: uppercase;
                    }
                    #header p {
                        margin: 0;
                        opacity: 0.65;
                        font-size: 13px;
                    }
                    .stats {
                        display: flex;
                        gap: 12px;
                        margin-top: 20px;
                        flex-wrap: wrap;
                    }
                    .stat-pill {
                        background: rgba(255,255,255,0.12);
                        border: 1px solid rgba(255,255,255,0.2);
                        border-radius: 999px;
                        padding: 4px 14px;
                        font-size: 12px;
                        color: rgba(255,255,255,0.9);
                    }
                    .category-block {
                        background: white;
                        border-radius: 12px;
                        box-shadow: 0 1px 4px rgba(0,0,0,0.08);
                        margin-bottom: 20px;
                        overflow: hidden;
                    }
                    .category-header {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 14px 20px;
                        border-bottom: 1px solid #e2e8f0;
                        background: #f8fafc;
                    }
                    .category-header h2 {
                        margin: 0;
                        font-size: 13px;
                        font-weight: 700;
                        color: #0f172a;
                        text-transform: uppercase;
                        letter-spacing: 0.05em;
                    }
                    .category-badge {
                        background: #0ea5e9;
                        color: white;
                        border-radius: 999px;
                        padding: 2px 9px;
                        font-size: 11px;
                        font-weight: 600;
                        margin-left: auto;
                    }
                    .category-badge.green  { background: #10b981; }
                    .category-badge.purple { background: #8b5cf6; }
                    .category-badge.orange { background: #f59e0b; }
                    .category-badge.pink   { background: #ec4899; }
					table {
						width: 100%;
						border-collapse: collapse;
					}
					td {
						padding: 10px 20px;
						border-bottom: 1px solid #f1f5f9;
						font-size: 12.5px;
					}
					tr:last-child td { border-bottom: none; }
					tr:hover td {
						background-color: #f8fafc;
					}
                    .dot {
                        display: inline-block;
                        width: 8px; height: 8px;
                        border-radius: 50%;
                        margin-right: 2px;
                    }
				</style>
			</head>
			<body>
				<div id="header">
					<h1>XML Sitemap</h1>
					<p>Explorable index of all pages on Aureole PharmaTech.</p>
                    <div class="stats">
                        <span class="stat-pill">&#x2022; Home &amp; Core: <xsl:value-of select="count(sitemap:urlset/sitemap:url[not(contains(sitemap:loc,'/products/')) and not(contains(sitemap:loc,'/vcards/')) and not(contains(sitemap:loc,'-manufacturers-and-suppliers-in-'))])"/> pages</span>
                        <span class="stat-pill">&#x2022; Products: <xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc,'/products/')])"/> pages</span>
                        <span class="stat-pill">&#x2022; City Pages: <xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc,'-manufacturers-and-suppliers-in-')])"/> pages</span>
                        <span class="stat-pill">&#x2022; V-Cards: <xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc,'/vcards/')])"/> cards</span>
                        <span class="stat-pill">&#x2022; Total: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs</span>
                    </div>
				</div>

                <!-- HOME & CORE PAGES -->
                <div class="category-block">
                    <div class="category-header">
                        <h2>Home &amp; Core Pages</h2>
                        <span class="category-badge green"><xsl:value-of select="count(sitemap:urlset/sitemap:url[not(contains(sitemap:loc,'/products/')) and not(contains(sitemap:loc,'/vcards/')) and not(contains(sitemap:loc,'-manufacturers-and-suppliers-in-'))])"/> URLs</span>
                    </div>
                    <table>
                        <xsl:for-each select="sitemap:urlset/sitemap:url[not(contains(sitemap:loc,'/products/')) and not(contains(sitemap:loc,'/vcards/')) and not(contains(sitemap:loc,'-manufacturers-and-suppliers-in-'))]">
                            <tr>
                                <td>
                                    <xsl:variable name="itemURL"><xsl:value-of select="sitemap:loc"/></xsl:variable>
                                    <a href="{$itemURL}"><xsl:value-of select="sitemap:loc"/></a>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>

                <!-- PRODUCT PAGES -->
                <div class="category-block">
                    <div class="category-header">
                        <h2>Product Pages</h2>
                        <span class="category-badge purple"><xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc,'/products/')])"/> URLs</span>
                    </div>
                    <table>
                        <xsl:for-each select="sitemap:urlset/sitemap:url[contains(sitemap:loc,'/products/')]">
                            <tr>
                                <td>
                                    <xsl:variable name="itemURL"><xsl:value-of select="sitemap:loc"/></xsl:variable>
                                    <a href="{$itemURL}"><xsl:value-of select="sitemap:loc"/></a>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>

                <!-- CITY-WISE LANDING PAGES -->
                <div class="category-block">
                    <div class="category-header">
                        <h2>City-Wise Landing Pages</h2>
                        <span class="category-badge orange"><xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc,'-manufacturers-and-suppliers-in-')])"/> URLs</span>
                    </div>
                    <table>
                        <xsl:for-each select="sitemap:urlset/sitemap:url[contains(sitemap:loc,'-manufacturers-and-suppliers-in-')]">
                            <tr>
                                <td>
                                    <xsl:variable name="itemURL"><xsl:value-of select="sitemap:loc"/></xsl:variable>
                                    <a href="{$itemURL}"><xsl:value-of select="sitemap:loc"/></a>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>

                <!-- V-CARDS -->
                <div class="category-block">
                    <div class="category-header">
                        <h2>V-Cards (Digital Business Cards)</h2>
                        <span class="category-badge pink"><xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc,'/vcards/')])"/> cards</span>
                    </div>
                    <table>
                        <xsl:for-each select="sitemap:urlset/sitemap:url[contains(sitemap:loc,'/vcards/')]">
                            <tr>
                                <td>
                                    <xsl:variable name="itemURL"><xsl:value-of select="sitemap:loc"/></xsl:variable>
                                    <a href="{$itemURL}"><xsl:value-of select="sitemap:loc"/></a>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>

			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
