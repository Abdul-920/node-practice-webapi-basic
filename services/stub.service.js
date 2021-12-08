/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const getStubTemplate = async (stubData) => {
  // const user = await userService.getUserByEmail(email);
  // if (!user || !(await user.isPasswordMatch(password))) {
  //   throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  // }
  return {
    content: [
      {
        columns: [

          {
            width: '70%',
            text: 'Earnings Statement', bold: true, fontSize: 32,
            style: {
              alignment: 'right',
            }
          },
          {
            image: 'building',
            width: 75,
          }
        ],
        // optional space between columns
        columnGap: 15
      },
      {
        columns: [
          [
            '01597',
            {
              layout: 'lightHorizontalLines',
              table: {
                // headers are automatically repeated if the table spans over multiple pages
                // you can declare how many rows should be treated as headers
                headerRows: 1,
                widths: ['*', '*', '*', '*'],
                body: [
                  [{ text: 'Company Code', bold: true }, { text: 'Loc/Dept', bold: true }, { text: 'Number', bold: true }, { text: 'Page', bold: true }],
                  ['PR/TX00987425', '77092/Acct', '059073', '1 of 1']
                ]
              },
            }
          ],
          [
            {
              columns: [
                {
                  width: 100, text: 'Period Begining:'

                },
                {
                  width: 100, text: '06/15/2021'

                }
              ]
            },
            {
              columns: [
                { width: 100, text: 'Period Ending:' },
                { width: 100, text: '06/15/2021' }
              ]
            },
            {
              columns: [
                { width: 100, text: 'Pay Date:' },
                { width: 100, text: '06/15/2021' }
              ]
            }
          ]
        ],
        // optional space between columns
        columnGap: 15
      },
      {
        columns: [
          [
            {
              text: stubData.empName, bold: true, fontSize: 16,
            },
            {
              text: '', fontSize: 12,
            },
            {
              columns: [
                {
                  width: '60%',
                  text: 'Social Security Number:'
                }, {
                  text: 'XXXX-XX-1256'
                }
              ]
            },
            {
              columns: [
                {
                  width: '60%',
                  text: 'Filing Status:'
                }, {
                  text: 'Single'
                }
              ]
            },
            {
              columns: [
                {
                  width: '60%',
                  text: 'Exemptions/Allowances:'
                }, {
                  text: 'Nil'
                }
              ]
            },
            {
              columns: [
                {
                  width: '60%',
                  text: 'Federal:'
                }, {
                  text: 'Standard Withholding table'
                }
              ]
            }
            // style: {
            //     alignment: 'center',
            // }
          ],
          {
            width: "35%",
            text: 'TOUCH OF CLASS CLEANING L1012 LAKE POINT LANESTONE MOUNTAIN, GA 30088', bold: true, fontSize: 12,
            style: {
              alignment: 'center',
            }
          }
        ]
      },
      {
        columns: [
          [
            {
              layout: 'lightHorizontalLines', // optional
              table: {
                // headers are automatically repeated if the table spans over multiple pages
                // you can declare how many rows should be treated as headers
                headerRows: 1,
                widths: ['*', '*', '*', '*'],
                body: [
                  [{ text: 'Earnings', bold: true }, { text: 'Type', bold: true }, { text: 'Hours/Units', bold: true }, { text: 'This Period', bold: true }],
                  ['PR/TX00987425', '77092/Acct', '059073', '1 of 1']
                ]
              }
            }
          ],
          [
            {
              text: 'Other Benefits and Information', bold: true, fontSize: 14
            },
            {
              layout: 'lightHorizontalLines', // optional
              table: {
                // headers are automatically repeated if the table spans over multiple pages
                // you can declare how many rows should be treated as headers
                headerRows: 1,
                widths: ['*', '*', '*'],
                body: [
                  [{ text: 'Description', bold: true }, { text: 'This Period', bold: true }, { text: 'Total To Date', bold: true }],
                  ['Total Hours Worked (Regular)', '40', ''],
                  ['Total Hours Worked (Overtime)', '40', '']
                ]
              }
            },
            {
              columns: [
                {
                  text: 'Basis Of Pay : ', bold: true, fontSize: 10,
                  style: {
                    alignment: 'right',

                  }
                },
                {
                  text: 'Hourly',
                  style: {
                    alignment: 'left',

                  }
                },
              ]
            },
            {
              text: 'Important Notes', bold: true, fontSize: 10
            },
            {
              text: 'ADP Total Source, Inc., A Professional Employer Organization 10200 Sunset Drive, Miami, FL 33173 1-844-448-0325'
            },
          ]
        ],
        columnGap: 15
      },
      {
        columns: [
          [
            {
              layout: 'headerLineOnly', // optional
              table: {
                // headers are automatically repeated if the table spans over multiple pages
                // you can declare how many rows should be treated as headers
                headerRows: 1,
                widths: ['*', '*', '*', '*'],
                body: [
                  [{ text: 'Deductions', bold: true }, { text: 'Statutory', bold: true }, { text: 'This Period', bold: true }, { text: 'Year To Date', bold: true }],
                  ['', 'Medicare Tax', '-22.85', '-570.75'],
                  ['', 'Social Security Tax', '- 97.62', '- 2,440.50'],
                  ['', 'Federal Income Tax', '- 245.47', '- 6,136.75'],
                  ['', 'State Tax', '- 87.91', '- 2,197.75']
                ]
              }
            }
          ],
          [
            {
              text: 'Additional Tax Withdolding Information', bold: true, fontSize: 14
            },
            {
              columns: [
                {
                  width: '60%',
                  text: 'Taxable Marital Status:'
                }, {
                  text: 'Single'
                }
              ]
            },
            {
              columns: [
                {
                  width: '60%',
                  text: 'Federal:'
                }, {
                  text: 'Single'
                }
              ]
            }, {
              columns: [
                {
                  width: '60%',
                  text: 'State:'
                }, {
                  text: 'Single'
                }
              ]
            },
            {
              columns: [
                {
                  width: '60%',
                  text: 'Exemptions/Allowances:'
                }, {
                  text: 'Single'
                }
              ]
            }, {
              columns: [
                {
                  width: '60%',
                  text: 'Federal:'
                }, {
                  text: 'Single'
                }
              ]
            }, {
              columns: [
                {
                  width: '60%',
                  text: 'State:'
                }, {
                  text: 'Single'
                }
              ]
            },
            {
              text: 'Your federal taxable salary of this period is:', bold: true, fontSize: 10
            },
            {
              text: '$ 1,574.50'
            },
          ]
        ],
        columnGap: 15
      },
      {
        columns: [
          {
            width: '50%',
            image: 'building',
            width: 80,
          },
          [
            {
              text: 'Advice Number', bold: true, fontSize: 12,
              style: {
                alignment: 'center',
              }
            },
            {
              text: '059073', style: {
                alignment: 'center',
              }
            },

          ],
          [
            {
              text: 'Advice Number', bold: true, fontSize: 12,
              style: {
                alignment: 'center',
              }
            },
            {
              text: '059073', style: {
                alignment: 'center',
              }
            },
          ],

        ]
      },
      {
        layout: 'headerLineOnly', // optional
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: ['30%', '*', '*', '*', '*'],
          body: [
            [{ text: 'Deposited to the account of', bold: true }, { text: 'Last 4 SSN', bold: true }, { text: 'Transit', bold: true }, { text: 'Aba', bold: true }, { text: 'Amount', bold: true }],
            ['KENYA-ALEXIS CARTER', 'XXX-XX- 3135', 'XXXX', 'XXXX', '1120.57'],
          ]
        }
      }
    ],
    footer: {
      columns: [
        { text: 'This is not a check', style: 'footer' },
        { text: 'Non-Negotiable', style: 'footer' }
      ]
    },
    images: {
      building: 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAALQCAYAAABmJdeHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxRDI2MkQ0NDI2RTExRTZBRDYwRjREQjk5Nzg4MUNDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAxRDI2MkQ1NDI2RTExRTZBRDYwRjREQjk5Nzg4MUNDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDFEMjYyRDI0MjZFMTFFNkFENjBGNERCOTk3ODgxQ0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDFEMjYyRDM0MjZFMTFFNkFENjBGNERCOTk3ODgxQ0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6fl/3KAAByTUlEQVR42uzdTXIbR7YA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bXVtLXNjYWxlPTEsIHVzZXItc2NhbGFibGU9bm8sIG1pbmltYWwtdWknIC8+PCEtLVtpZiBJRV0+IDxzY3JpcHQgc3JjPSJodHRwczovL3d3dy5wbmdwaXguY29tL3dwLWNvbnRlbnQvdGhlbWVzL3BuZ3BpeC9qcy9odG1sNS5qcyI+PC9zY3JpcHQ+IDwhW2VuZGlmXS0tPjxsaW5rCnJlbD0iYWx0ZXJuYXRlIiB0eXBlPSJhcHBsaWNhdGlvbi9yc3MreG1sIiB0aXRsZT0iUG5nUGl4IFJTUyBGZWVkIiBocmVmPSJodHRwczovL3d3dy5wbmdwaXguY29tL2ZlZWQiIC8+PGxpbmsKcmVsPSJwaW5nYmFjayIgaHJlZj0iaHR0cHM6Ly93d3cucG5ncGl4LmNvbS94bWxycGMucGhwIiAvPjxsaW5rCnJlbD0ic2hvcnRjdXQgaWNvbiIgdHlwZT0iaW1hZ2UvcG5nIiBocmVmPSJodHRwOi8vd3d3LnBuZ3BpeC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDYvZmF2aWNvbi5wbmciLz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPmh0bWwKYm9keXtiYWNrZ3JvdW5kLWNvbG9yOiNGNUY1RjUhaW1wb3J0YW50fS5mcm9udC1vdmVybGF5LWNvbnRlbnR7YmFja2dyb3VuZDp1cmwoaHR0cDovL3d3dy5wbmdwaXguY29tL3dwLWNvbnRlbnQvdGhlbWVzL3BuZ3BpeC9pbWFnZXMvYmcuanBnKX0uZW50cnkgcCBhLCAub25lX2hhbGYgYSwgLm9uZV9oYWxmX2xhc3QgYSwub25lX3RoaXJkIGEsLm9uZV90aGlyZF9sYXN0IGEsLm9uZV9mb3VydGggYSwub25lX2ZvdXJ0aF9sYXN0IGEsLmJveGluZm8gYSwgLmJveHN1Y2NlcyBhLCAuYm94ZXJyb3IgYSwgLmJveG5vdGljZQphe2NvbG9yOiNGRkYgIWltcG9ydGFudH0uZW50cnkgcCBhLCAub25lX2hhbGYgYSwgLm9uZV9oYWxmX2xhc3QgYSwgLm9uZV90aGlyZCBhLCAub25lX3RoaXJkX2xhc3QgYSwgLm9uZV9mb3VydGggYSwgLm9uZV9mb3VydGhfbGFzdCBhLCAuYm94aW5mbyBhLCAuYm94c3VjY2VzIGEsIC5ib3hlcnJvciBhLCAuYm94bm90aWNlCmF7YmFja2dyb3VuZC1jb2xvcjojZTQzNzZkICFpbXBvcnRhbnR9LnRvcC1zb2NpYWwgbGkgYSwgLm1lbnUtY2F0ZWdvcmllcyAuanF1ZXJ5Y3NzbWVudSB1bCBsaS5tb3JlID4gYSwgI2luZnNjci1sb2FkaW5nIHNwYW4sIC5yYi1leHBlcmllbmNlLXJhdGluZywgZGl2LmZlZWQtaW5mbyBpLCAuYXJ0aWNsZV9saXN0IGxpIC5hbi1kaXNwbGF5LWF1dGhvciBhLCB1bC5hcnRpY2xlX2xpc3QgLmFuLXdpZGdldC10aXRsZSBpLCAud2lkZ2V0X2FudGhlbWVzX2NhdGVnb3JpZXMgbGksIGRpdi50YWdjbG91ZCBzcGFuLCAud2lkZ2V0X2FyY2hpdmUgbGksIC53aWRnZXRfbWV0YSBsaSwgI21jVGFnTWFwIC50YWdpbmRleCBoNCwgI3NjX21jVGFnTWFwIC50YWdpbmRleCBoNCwgdWwuZm9vdGVyLXNvY2lhbCBsaSBhLCBhOmhvdmVyLCAudHJvcGh5LWZlYXR1cmVkIGksIHVsLmdyaWRfbGlzdCAuY29udGVudCBhOmhvdmVyCmgye2NvbG9yOiNlNDM3NmQgIWltcG9ydGFudH0uY3VzdG9tLWRyb3Bkb3duLS13aGl0ZTo6YmVmb3JlLCBpbnB1dC5hcC1mb3JtLXN1Ym1pdC1idXR0b24sIC53cC1wYWdlbmF2aSBhOmhvdmVyLCAud3AtcGFnZW5hdmkgc3Bhbi5jdXJyZW50LCAuZW50cnktYnRuLCAubXktcGFnaW5hdGVkLXBvc3RzIHNwYW4sICNuZXdzbGV0dGVyLWZvcm0gaW5wdXQubmV3c2xldHRlci1idG4sICNjb250YWN0Zm9ybSAuc2VuZGVtYWlsLCAjYmFjay10b3Agc3BhbiwgI3NlYXJjaGZvcm0yIC5idXR0b25pY29uLCB1bC5tdl9saXN0X3NtYWxsIGxpIGgzIHNwYW4sICN0YWJzIGxpLmFjdGl2ZSBhLCAjdGFicyBsaS5hY3RpdmUgYTpob3ZlciwgI3RhYnMyIGxpLmFjdGl2ZTIgYSwgI3RhYnMyIGxpLmFjdGl2ZTIgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlNDM3NmQgIWltcG9ydGFudH0uanF1ZXJ5Y3NzbWVudSB1bCBsaSA+IGE6YWZ0ZXIsIC5hcmNoaXZlLWhlYWRlciBoMzphZnRlciwgZGl2LmVudHJ5LWV4Y2VycHQ6YWZ0ZXIsIGgzLndpZGdldC10aXRsZTphZnRlciwgLnJiLXJlc3VtZS1ibG9jayAucmItZXhwZXJpZW5jZSAucmItc2VjdGlvbi10aXRsZTphZnRlciwgLnJiLXJlc3VtZS1ibG9jayAucmItZXhwZXJpZW5jZS1pdGVtIC5yYi1yaWdodCBwOmFmdGVye2JhY2tncm91bmQ6bm9uZSByZXBlYXQgc2Nyb2xsIDAlIDAlICNlNDM3NmQgIWltcG9ydGFudH0jbWNUYWdNYXAgLnRhZ2luZGV4IGg0LCAjc2NfbWNUYWdNYXAgLnRhZ2luZGV4Cmg0e2JvcmRlci1ib3R0b206NXB4IHNvbGlkICNlNDM3NmQgIWltcG9ydGFudH11bCNpbmZpbml0ZS1hcnRpY2xlcwpsaS5zdGlja3l7Ym9yZGVyLXRvcDoxMHB4IHNvbGlkICNlNDM3NmQgIWltcG9ydGFudH0uZW50cnktdG9wIHNwYW4gYSwgZGl2LmZlZWQtaW5mbyBzdHJvbmcsIHVsLmFydGljbGVfbGlzdCAuYW4td2lkZ2V0LXRpdGxlIHNwYW4gYSwgLmNvcHlyaWdodCBhLCAubWFnYXppbmUtbGlzdCAuYW4td2lkZ2V0LXRpdGxlIHNwYW4KYXtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZTQzNzZkICFpbXBvcnRhbnR9ZGl2LnVwbG9hZGJ0biAuc2ltcGxlYnRuLCAuZnJvbnQtb3ZlcmxheS1jb250ZW50ICNzZWFyY2hmb3JtMSAuYnV0dG9uaWNvbiwgLnBvc3QtY2F0ZWdvcnkgYSwgdWwuYXJ0aWNsZV9saXN0IC5hcnRpY2xlLWNhdGVnb3J5e2JhY2tncm91bmQtY29sb3I6I2U0Mzc2ZCAhaW1wb3J0YW50fS5hcnRpY2xlLWNvbW0sIC53cC1wYWdlbmF2aSBhLCAud3AtcGFnZW5hdmkgc3BhbiwgLnNpbmdsZS1jb250ZW50IGgzLnRpdGxlLCAubXktcGFnaW5hdGVkLXBvc3RzIHAgYSwgI3dwLWNhbGVuZGFyIHRib2R5IHRkI3RvZGF5LCAuY29tbWVudHMgaDMuY29tbWVudC1yZXBseS10aXRsZSwgI2NvbW1lbnRmb3JtICNzZW5kZW1haWwsIGZvcm0ud3BjZjctZm9ybSBpbnB1dC53cGNmNy1zdWJtaXQsIC5iYXItdG9wLCAuZmEtYm94LCAjdGFicyBsaSBhLCAjdGFiczIgbGkKYXtiYWNrZ3JvdW5kLWNvbG9yOiMyMjIgIWltcG9ydGFudH0uc2luZ2xlLWNvbnRlbnQgaDMudGl0bGUgaSwgLmNvbW1lbnRzIGgzLmNvbW1lbnQtcmVwbHktdGl0bGUKaXtib3JkZXItY29sb3I6IzIyMiB0cmFuc3BhcmVudCAjMjIyICMyMjIyMjIgIWltcG9ydGFudH0uYXJyb3ctZG93bi1yZWxhdGVke2JvcmRlci10b3A6MTBweCBzb2xpZCAjMjIyMjIyIWltcG9ydGFudH0ud2lkZ2V0IGgzLnRpdGxlOmFmdGVyLGgzLnRvcC10aXRsZTphZnRlcntiYWNrZ3JvdW5kOm5vbmUgcmVwZWF0IHNjcm9sbCAwJSAwJSAjMjIyICFpbXBvcnRhbnR9LmZyb250LW92ZXJsYXktd3JhcApoMXtwYWRkaW5nLXRvcDoxMDBweCAhaW1wb3J0YW50fS5mcm9udC1vdmVybGF5LWNvbnRlbnQsLmZyb250LW92ZXJsYXktd3JhcHtoZWlnaHQ6MzYwcHggIWltcG9ydGFudH08L3N0eWxlPjx0aXRsZT5QYWdlIG5vdCBmb3VuZCAtIFBuZ1BpeDwvdGl0bGU+PG1ldGEKbmFtZT0icm9ib3RzIiBjb250ZW50PSJub2luZGV4LGZvbGxvdyIvPjxtZXRhCnByb3BlcnR5PSJvZzpsb2NhbGUiIGNvbnRlbnQ9ImVuX1VTIiAvPjxtZXRhCnByb3BlcnR5PSJvZzp0eXBlIiBjb250ZW50PSJvYmplY3QiIC8+PG1ldGEKcHJvcGVydHk9Im9nOnRpdGxlIiBjb250ZW50PSJQYWdlIG5vdCBmb3VuZCAtIFBuZ1BpeCIgLz48bWV0YQpwcm9wZXJ0eT0ib2c6c2l0ZV9uYW1lIiBjb250ZW50PSJQbmdQaXgiIC8+PG1ldGEKbmFtZT0idHdpdHRlcjpjYXJkIiBjb250ZW50PSJzdW1tYXJ5IiAvPjxtZXRhCm5hbWU9InR3aXR0ZXI6dGl0bGUiIGNvbnRlbnQ9IlBhZ2Ugbm90IGZvdW5kIC0gUG5nUGl4IiAvPiA8c2NyaXB0IHR5cGU9J2FwcGxpY2F0aW9uL2xkK2pzb24nPnsiQGNvbnRleHQiOiJodHRwOlwvXC9zY2hlbWEub3JnIiwiQHR5cGUiOiJXZWJTaXRlIiwiQGlkIjoiI3dlYnNpdGUiLCJ1cmwiOiJodHRwczpcL1wvd3d3LnBuZ3BpeC5jb21cLyIsIm5hbWUiOiJQbmdQaXgiLCJwb3RlbnRpYWxBY3Rpb24iOnsiQHR5cGUiOiJTZWFyY2hBY3Rpb24iLCJ0YXJnZXQiOiJodHRwczpcL1wvd3d3LnBuZ3BpeC5jb21cLz9zPXtzZWFyY2hfdGVybV9zdHJpbmd9IiwicXVlcnktaW5wdXQiOiJyZXF1aXJlZCBuYW1lPXNlYXJjaF90ZXJtX3N0cmluZyJ9fTwvc2NyaXB0PiA8bGluawpyZWw9J2Rucy1wcmVmZXRjaCcgaHJlZj0nLy9mb250cy5nb29nbGVhcGlzLmNvbScgLz48bGluawpyZWw9J2Rucy1wcmVmZXRjaCcgaHJlZj0nLy9zLncub3JnJyAvPjxsaW5rCnJlbD0iYWx0ZXJuYXRlIiB0eXBlPSJhcHBsaWNhdGlvbi9yc3MreG1sIiB0aXRsZT0iUG5nUGl4ICZyYXF1bzsgRmVlZCIgaHJlZj0iaHR0cHM6Ly93d3cucG5ncGl4LmNvbS9mZWVkIiAvPjxsaW5rCnJlbD0iYWx0ZXJuYXRlIiB0eXBlPSJhcHBsaWNhdGlvbi9yc3MreG1sIiB0aXRsZT0iUG5nUGl4ICZyYXF1bzsgQ29tbWVudHMgRmVlZCIgaHJlZj0iaHR0cHM6Ly93d3cucG5ncGl4LmNvbS9jb21tZW50cy9mZWVkIiAvPiA8c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCI+d2luZG93Ll93cGVtb2ppU2V0dGluZ3M9eyJiYXNlVXJsIjoiaHR0cHM6XC9cL3Mudy5vcmdcL2ltYWdlc1wvY29yZVwvZW1vamlcLzIuNFwvNzJ4NzJcLyIsImV4dCI6Ii5wbmciLCJzdmdVcmwiOiJodHRwczpcL1wvcy53Lm9yZ1wvaW1hZ2VzXC9jb3JlXC9lbW9qaVwvMi40XC9zdmdcLyIsInN2Z0V4dCI6Ii5zdmciLCJzb3VyY2UiOnsiY29uY2F0ZW1vamkiOiJodHRwczpcL1wvd3d3LnBuZ3BpeC5jb21cL3dwLWluY2x1ZGVzXC9qc1wvd3AtZW1vamktcmVsZWFzZS5taW4uanM/dmVyPTQuOS40In19OyFmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZChhLGIpe3ZhciBjPVN0cmluZy5mcm9tQ2hhckNvZGU7bC5jbGVhclJlY3QoMCwwLGsud2lkdGgsay5oZWlnaHQpLGwuZmlsbFRleHQoYy5hcHBseSh0aGlzLGEpLDAsMCk7dmFyIGQ9ay50b0RhdGFVUkwoKTtsLmNsZWFyUmVjdCgwLDAsay53aWR0aCxrLmhlaWdodCksbC5maWxsVGV4dChjLmFwcGx5KHRoaXMsYiksMCwwKTt2YXIgZT1rLnRvRGF0YVVSTCgpO3JldHVybiBkPT09ZX1mdW5jdGlvbiBlKGEpe3ZhciBiO2lmKCFsfHwhbC5maWxsVGV4dClyZXR1cm4hMTtzd2l0Y2gobC50ZXh0QmFzZWxpbmU9InRvcCIsbC5mb250PSI2MDAgMzJweCBBcmlhbCIsYSl7Y2FzZSJmbGFnIjpyZXR1cm4hKGI9ZChbNTUzNTYsNTY4MjYsNTUzNTYsNTY4MTldLFs1NTM1Niw1NjgyNiw4MjAzLDU1MzU2LDU2ODE5XSkpJiYoYj1kKFs1NTM1Niw1NzMzMiw1NjEyOCw1NjQyMyw1NjEyOCw1NjQxOCw1NjEyOCw1NjQyMSw1NjEyOCw1NjQzMCw1NjEyOCw1NjQyMyw1NjEyOCw1NjQ0N10sWzU1MzU2LDU3MzMyLDgyMDMsNTYxMjgsNTY0MjMsODIwMyw1NjEyOCw1NjQxOCw4MjAzLDU2MTI4LDU2NDIxLDgyMDMsNTYxMjgsNTY0MzAsODIwMyw1NjEyOCw1NjQyMyw4MjAzLDU2MTI4LDU2NDQ3XSksIWIpO2Nhc2UiZW1vamkiOnJldHVybiBiPWQoWzU1MzU3LDU2NjkyLDgyMDUsOTc5Miw2NTAzOV0sWzU1MzU3LDU2NjkyLDgyMDMsOTc5Miw2NTAzOV0pLCFifXJldHVybiExfWZ1bmN0aW9uIGYoYSl7dmFyIGM9Yi5jcmVhdGVFbGVtZW50KCJzY3JpcHQiKTtjLnNyYz1hLGMuZGVmZXI9Yy50eXBlPSJ0ZXh0L2phdmFzY3JpcHQiLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoImhlYWQiKVswXS5hcHBlbmRDaGlsZChjKX12YXIgZyxoLGksaixrPWIuY3JlYXRlRWxlbWVudCgiY2FudmFzIiksbD1rLmdldENvbnRleHQmJmsuZ2V0Q29udGV4dCgiMmQiKTtmb3Ioaj1BcnJheSgiZmxhZyIsImVtb2ppIiksYy5zdXBwb3J0cz17ZXZlcnl0aGluZzohMCxldmVyeXRoaW5nRXhjZXB0RmxhZzohMH0saT0wO2k8ai5sZW5ndGg7aSsrKWMuc3VwcG9ydHNbaltpXV09ZShqW2ldKSxjLnN1cHBvcnRzLmV2ZXJ5dGhpbmc9Yy5zdXBwb3J0cy5ldmVyeXRoaW5nJiZjLnN1cHBvcnRzW2pbaV1dLCJmbGFnIiE9PWpbaV0mJihjLnN1cHBvcnRzLmV2ZXJ5dGhpbmdFeGNlcHRGbGFnPWMuc3VwcG9ydHMuZXZlcnl0aGluZ0V4Y2VwdEZsYWcmJmMuc3VwcG9ydHNbaltpXV0pO2Muc3VwcG9ydHMuZXZlcnl0aGluZ0V4Y2VwdEZsYWc9Yy5zdXBwb3J0cy5ldmVyeXRoaW5nRXhjZXB0RmxhZyYmIWMuc3VwcG9ydHMuZmxhZyxjLkRPTVJlYWR5PSExLGMucmVhZHlDYWxsYmFjaz1mdW5jdGlvbigpe2MuRE9NUmVhZHk9ITB9LGMuc3VwcG9ydHMuZXZlcnl0aGluZ3x8KGg9ZnVuY3Rpb24oKXtjLnJlYWR5Q2FsbGJhY2soKX0sYi5hZGRFdmVudExpc3RlbmVyPyhiLmFkZEV2ZW50TGlzdGVuZXIoIkRPTUNvbnRlbnRMb2FkZWQiLGgsITEpLGEuYWRkRXZlbnRMaXN0ZW5lcigibG9hZCIsaCwhMSkpOihhLmF0dGFjaEV2ZW50KCJvbmxvYWQiLGgpLGIuYXR0YWNoRXZlbnQoIm9ucmVhZHlzdGF0ZWNoYW5nZSIsZnVuY3Rpb24oKXsiY29tcGxldGUiPT09Yi5yZWFkeVN0YXRlJiZjLnJlYWR5Q2FsbGJhY2soKX0pKSxnPWMuc291cmNlfHx7fSxnLmNvbmNhdGVtb2ppP2YoZy5jb25jYXRlbW9qaSk6Zy53cGVtb2ppJiZnLnR3ZW1vamkmJihmKGcudHdlbW9qaSksZihnLndwZW1vamkpKSl9KHdpbmRvdyxkb2N1bWVudCx3aW5kb3cuX3dwZW1vamlTZXR0aW5ncyk7PC9zY3JpcHQ+IDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+aW1nLndwLXNtaWxleSxpbWcuZW1vaml7ZGlzcGxheTppbmxpbmUgIWltcG9ydGFudDtib3JkZXI6bm9uZSAhaW1wb3J0YW50O2JveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O2hlaWdodDoxZW0gIWltcG9ydGFudDt3aWR0aDoxZW0gIWltcG9ydGFudDttYXJnaW46MAouMDdlbSAhaW1wb3J0YW50O3ZlcnRpY2FsLWFsaWduOi0wLjFlbSAhaW1wb3J0YW50O2JhY2tncm91bmQ6bm9uZSAhaW1wb3J0YW50O3BhZGRpbmc6MAohaW1wb3J0YW50fTwvc3R5bGU+PGxpbmsKcmVsPSdzdHlsZXNoZWV0JyBpZD0nYW50aGVtZXNfc2hvcnRjb2RlX3N0eWxlcy1jc3MnICBocmVmPSdodHRwczovL3d3dy5wbmdwaXguY29tL3dwLWNvbnRlbnQvcGx1Z2lucy9hbnRoZW1lcy1zaG9ydGNvZGVzL2luY2x1ZGVzL2Nzcy9hbnRoZW1lcy1zaG9ydGNvZGVzLmNzcz92ZXI9NC45LjQnIHR5cGU9J3RleHQvY3NzJyBtZWRpYT0nYWxsJyAvPjxsaW5rCnJlbD0nc3R5bGVzaGVldCcgaWQ9J2FyZXZpY29fc2NzZmJjc3MtY3NzJyAgaHJlZj0naHR0cHM6Ly93d3cucG5ncGl4LmNvbS93cC1jb250ZW50L3BsdWdpbnMvZmFjZWJvb2stcGFnZS1wcm9tb3Rlci1saWdodGJveC9pbmNsdWRlcy9mZWF0aGVybGlnaHQvZmVhdGhlcmxpZ2h0Lm1pbi5jc3M/dmVyPTQuOS40JyB0eXBlPSd0ZXh0L2NzcycgbWVkaWE9J2FsbCcgLz48bGluawpyZWw9J3N0eWxlc2hlZXQnIGlkPSd3cC1wYWdlbmF2aS1jc3MnICBocmVmPSdodHRwczovL3d3dy5wbmdwaXguY29tL3dwLWNvbnRlbnQvcGx1Z2lucy93cC1wYWdlbmF2aS9wYWdlbmF2aS1jc3MuY3NzP3Zlcj0yLjcwJyB0eXBlPSd0ZXh0L2NzcycgbWVkaWE9J2FsbCcgLz48bGluawpyZWw9J3N0eWxlc2hlZXQnIGlkPSdzdHlsZS1jc3MnICBocmVmPSdodHRwczovL3d3dy5wbmdwaXguY29tL3dwLWNvbnRlbnQvdGhlbWVzL3BuZ3BpeC9zdHlsZS5jc3M/dmVyPTEuMCcgdHlwZT0ndGV4dC9jc3MnIG1lZGlhPSdhbGwnIC8+PGxpbmsKcmVsPSdzdHlsZXNoZWV0JyBpZD0nZGVmYXVsdC1jc3MnICBocmVmPSdodHRwczovL3d3dy5wbmdwaXguY29tL3dwLWNvbnRlbnQvdGhlbWVzL3BuZ3BpeC9jc3MvY29sb3JzL2RlZmF1bHQuY3NzP3Zlcj00LjkuNCcgdHlwZT0ndGV4dC9jc3MnIG1lZGlhPSdhbGwnIC8+PGxpbmsKcmVsPSdzdHlsZXNoZWV0JyBpZD0nb3dsLWNhcm91c2VsLWNzcy1jc3MnICBocmVmPSdodHRwczovL3d3dy5wbmdwaXguY29tL3dwLWNvbnRlbnQvdGhlbWVzL3BuZ3BpeC9vd2wtY2Fyb3VzZWwvb3dsLmNhcm91c2VsLmNzcz92ZXI9NC45LjQnIHR5cGU9J3RleHQvY3NzJyBtZWRpYT0nYWxsJyAvPjxsaW5rCnJlbD0nc3R5bGVzaGVldCcgaWQ9J3Jlc3BvbnNpdmUtY3NzJyAgaHJlZj0naHR0cHM6Ly93d3cucG5ncGl4LmNvbS93cC1jb250ZW50L3RoZW1lcy9wbmdwaXgvY3NzL3Jlc3BvbnNpdmUuY3NzP3Zlcj0xLjAnIHR5cGU9J3RleHQvY3NzJyBtZWRpYT0nYWxsJyAvPjxsaW5rCnJlbD0nc3R5bGVzaGVldCcgaWQ9J2dvb2dsZS1mb250LWNzcycgIGhyZWY9Jy8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SdWRhJTNBNDAwJTJDNzAwJiMwMzg7dmVyPTQuOS40JyB0eXBlPSd0ZXh0L2NzcycgbWVkaWE9J2FsbCcgLz48bGluawpyZWw9J3N0eWxlc2hlZXQnIGlkPSdmb250LWF3ZXNvbWUtY3NzJyAgaHJlZj0naHR0cHM6Ly93d3cucG5ncGl4LmNvbS93cC1jb250ZW50L3RoZW1lcy9wbmdwaXgvY3NzL2ZvbnQtYXdlc29tZS00LjUuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3M/dmVyPTQuOS40JyB0eXBlPSd0ZXh0L2NzcycgbWVkaWE9J2FsbCcgLz4gPHNjcmlwdCB0eXBlPSd0ZXh0L2phdmFzY3JpcHQnIHNyYz0naHR0cHM6Ly93d3cucG5ncGl4LmNvbS93cC1pbmNsdWRlcy9qcy9qcXVlcnkvanF1ZXJ5LmpzP3Zlcj0xLjEyLjQnPjwvc2NyaXB0PiA8c2NyaXB0IHR5cGU9J3RleHQvamF2YXNjcmlwdCcgc3JjPSdodHRwczovL3d3dy5wbmdwaXguY29tL3dwLWluY2x1ZGVzL2pzL2pxdWVyeS9qcXVlcnktbWlncmF0ZS5taW4uanM/dmVyPTEuNC4xJz48L3NjcmlwdD4gPHNjcmlwdCB0eXBlPSd0ZXh0L2phdmFzY3JpcHQnIHNyYz0naHR0cHM6Ly93d3cucG5ncGl4LmNvbS93cC1jb250ZW50L3BsdWdpbnMvZmFjZWJvb2stcGFnZS1wcm9tb3Rlci1saWdodGJveC9pbmNsdWRlcy9mZWF0aGVybGlnaHQvZmVhdGhlcmxpZ2h0Lm1pbi5qcz92ZXI9NC45LjQnPjwvc2NyaXB0PiA8c2NyaXB0IHR5cGU9J3RleHQvamF2YXNjcmlwdCc+dmFyIGxiX2xfcmV0PXsid2lkdGgiOiI0MDAiLCJoZWlnaHQiOiIyNTUiLCJkZWxheSI6IjEwMDAwIiwiY29jIjoiMSIsImZiX2lkIjoicG5ncGl4IiwiY29vYyI6IjAiLCJkaXNwbGF5X29uX2FsbCI6IjEiLCJzaG93X29uY2UiOiIxIiwibWluIjoiMCIsInBlcmZvcm1hbmNlIjoiMCJ9Ozwvc2NyaXB0PiA8c2NyaXB0IHR5cGU9J3RleHQvamF2YXNjcmlwdCcgc3JjPSdodHRwczovL3d3dy5wbmdwaXguY29tL3dwLWNvbnRlbnQvcGx1Z2lucy9mYWNlYm9vay1wYWdlLXByb21vdGVyLWxpZ2h0Ym94L2luY2x1ZGVzL2xhdW5jaC9sYXVuY2gubWluLmpzP3Zlcj00LjkuNCc+PC9zY3JpcHQ+IDxsaW5rCnJlbD0naHR0cHM6Ly9hcGkudy5vcmcvJyBocmVmPSdodHRwczovL3d3dy5wbmdwaXguY29tL3dwLWpzb24vJyAvPjxsaW5rCnJlbD0iRWRpdFVSSSIgdHlwZT0iYXBwbGljYXRpb24vcnNkK3htbCIgdGl0bGU9IlJTRCIgaHJlZj0iaHR0cHM6Ly93d3cucG5ncGl4LmNvbS94bWxycGMucGhwP3JzZCIgLz48bGluawpyZWw9Indsd21hbmlmZXN0IiB0eXBlPSJhcHBsaWNhdGlvbi93bHdtYW5pZmVzdCt4bWwiIGhyZWY9Imh0dHBzOi8vd3d3LnBuZ3BpeC5jb20vd3AtaW5jbHVkZXMvd2x3bWFuaWZlc3QueG1sIiAvPjxtZXRhCm5hbWU9ImdlbmVyYXRvciIgY29udGVudD0iV29yZFByZXNzIDQuOS40IiAvPiA8c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCI+d2luZG93Ll9zZV9wbHVnaW5fdmVyc2lvbj0nOC4xLjknOzwvc2NyaXB0PiA8L2hlYWQ+PGJvZHkKY2xhc3M9ImVycm9yNDA0Ij48aGVhZGVyPjxkaXYKY2xhc3M9Im1haW4taGVhZGVyIj48ZGl2CmNsYXNzPSJzdGlja3ktb24iPjxhCmhyZWY9Imh0dHBzOi8vd3d3LnBuZ3BpeC5jb20vIj48aW1nCmNsYXNzPSJsb2dvIiBzcmM9Imh0dHA6Ly93d3cucG5ncGl4LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8wNi9sb2dvLnBuZyIgYWx0PSJQbmdQaXgiIC8+PC9hPjxuYXYKaWQ9Im15anF1ZXJ5bWVudSIgY2xhc3M9ImpxdWVyeWNzc21lbnUiPgo8L25hdj48ZGl2CmNsYXNzPSJ1cGxvYWRidG4iPgo8YQpocmVmPSIjIiBjbGFzcz0ic2ltcGxlYnRuIj48aQpjbGFzcz0iZmEgZmEtY2xvdWQtdXBsb2FkIj48L2k+IDxzcGFuPlN1Ym1pdDwvc3Bhbj48L2E+PC9kaXY+PGRpdgpjbGFzcz0iY3VzdG9tLWRyb3Bkb3duIGN1c3RvbS1kcm9wZG93bi0td2hpdGUiPjxmb3JtCmFjdGlvbj0iaHR0cHM6Ly93d3cucG5ncGl4LmNvbS8iIG1ldGhvZD0iZ2V0Ij4KPHNlbGVjdApuYW1lPSdjYXQnIGlkPSdjYXQnIGNsYXNzPSdwb3N0Zm9ybScgIG9uY2hhbmdlPSdyZXR1cm4gdGhpcy5mb3JtLnN1Ym1pdCgpJz48b3B0aW9uCnZhbHVlPScwJyBzZWxlY3RlZD0nc2VsZWN0ZWQnPkJyb3dzZSBDYXRlZ29yaWVzPC9vcHRpb24+PG9wdGlvbgpjbGFzcz0ibGV2ZWwtMCIgdmFsdWU9IjIwMDciPkNsaXBhcnRzJm5ic3A7Jm5ic3A7KDQ4OCk8L29wdGlvbj48b3B0aW9uCmNsYXNzPSJsZXZlbC0wIiB2YWx1ZT0iMjU1MyI+Q2VsZWJyaXR5Jm5ic3A7Jm5ic3A7KDI5OSk8L29wdGlvbj48b3B0aW9uCmNsYXNzPSJsZXZlbC0wIiB2YWx1ZT0iMTQyIj5WZWdldGFibGVzJm5ic3A7Jm5ic3A7KDM0MSk8L29wdGlvbj48b3B0aW9uCmNsYXNzPSJsZXZlbC0wIiB2YWx1ZT0iMTQ1Ij5GcnVpdHMmbmJzcDsmbmJzcDsoMzkzKTwvb3B0aW9uPjxvcHRpb24KY2xhc3M9ImxldmVsLTAiIHZhbHVlPSIxNDQiPkFuaW1hbHMmbmJzcDsmbmJzcDsoMTk3KTwvb3B0aW9uPjxvcHRpb24KY2xhc3M9ImxldmVsLTAiIHZhbHVlPSIxNTUiPkJpcmRzJm5ic3A7Jm5ic3A7KDU2KTwvb3B0aW9uPjxvcHRpb24KY2xhc3M9ImxldmVsLTAiIHZhbHVlPSIxNDgiPkZsb3dlcnMmbmJzcDsmbmJzcDsoNTYpPC9vcHRpb24+PG9wdGlvbgpjbGFzcz0ibGV2ZWwtMCIgdmFsdWU9IjE0MyI+Q2FycyZuYnNwOyZuYnNwOyg4MTEpPC9vcHRpb24+PG9wdGlvbgpjbGFzcz0ibGV2ZWwtMCIgdmFsdWU9IjE1NyI+VmVoaWNsZXMmbmJzcDsmbmJzcDsoMzIxKTwvb3B0aW9uPjxvcHRpb24KY2xhc3M9ImxldmVsLTAiIHZhbHVlPSIxNTYiPkVsZWN0cm9uaWNzJm5ic3A7Jm5ic3A7KDMwOSk8L29wdGlvbj48b3B0aW9uCmNsYXNzPSJsZXZlbC0wIiB2YWx1ZT0iMTQ2Ij5Gb29kJm5ic3A7Jm5ic3A7KDM3Myk8L29wdGlvbj48b3B0aW9uCmNsYXNzPSJsZXZlbC0wIiB2YWx1ZT0iMTUxIj5QZW9wbGUmbmJzcDsmbmJzcDsoMzE1KTwvb3B0aW9uPjxvcHRpb24KY2xhc3M9ImxldmVsLTAiIHZhbHVlPSIxNDkiPkZhc2hpb24mbmJzcDsmbmJzcDsoMTEzKTwvb3B0aW9uPjxvcHRpb24KY2xhc3M9ImxldmVsLTAiIHZhbHVlPSIxNTIiPkZ1cm5pdHVyZSZuYnNwOyZuYnNwOygyNik8L29wdGlvbj48b3B0aW9uCmNsYXNzPSJsZXZlbC0wIiB2YWx1ZT0iMTU0Ij5JbnNlY3RzJm5ic3A7Jm5ic3A7KDQyKTwvb3B0aW9uPjxvcHRpb24KY2xhc3M9ImxldmVsLTAiIHZhbHVlPSIxNDciPk5hdHVyZSZuYnNwOyZuYnNwOygxNzMpPC9vcHRpb24+PG9wdGlvbgpjbGFzcz0ibGV2ZWwtMCIgdmFsdWU9IjE1MyI+U3BvcnRzJm5ic3A7Jm5ic3A7KDE0OCk8L29wdGlvbj48b3B0aW9uCmNsYXNzPSJsZXZlbC0wIiB2YWx1ZT0iMTUwIj5PYmplY3RzJm5ic3A7Jm5ic3A7KDEsMTA3KTwvb3B0aW9uPjxvcHRpb24KY2xhc3M9ImxldmVsLTAiIHZhbHVlPSIxNTkiPldlYXBvbnMmbmJzcDsmbmJzcDsoMTI3KTwvb3B0aW9uPjxvcHRpb24KY2xhc3M9ImxldmVsLTAiIHZhbHVlPSIxNTgiPlRvb2xzJm5ic3A7Jm5ic3A7KDEwMCk8L29wdGlvbj48b3B0aW9uCmNsYXNzPSJsZXZlbC0wIiB2YWx1ZT0iMTE4NSI+TG9nb3MmbmJzcDsmbmJzcDsoMzgxKTwvb3B0aW9uPjxvcHRpb24KY2xhc3M9ImxldmVsLTAiIHZhbHVlPSI5OCI+T3RoZXJzJm5ic3A7Jm5ic3A7KDU0KTwvb3B0aW9uPgo8L3NlbGVjdD4KPG5vc2NyaXB0PjxkaXY+PGlucHV0CnR5cGU9InN1Ym1pdCIgdmFsdWU9IlZpZXciIC8+PC9kaXY+PC9ub3NjcmlwdD48L2Zvcm0+PC9kaXY+PGZvcm0KaWQ9InNlYXJjaGZvcm0yIiBjbGFzcz0iaGVhZGVyLXNlYXJjaCIgbWV0aG9kPSJnZXQiIGFjdGlvbj0iaHR0cHM6Ly93d3cucG5ncGl4LmNvbS8iPjxpbnB1dApwbGFjZWhvbGRlcj0iU2VhcmNoIFBORyAuLi4iIHR5cGU9InRleHQiIG5hbWU9InMiIGlkPSJzIiAvPjxpbnB1dAp0eXBlPSJzdWJtaXQiIHZhbHVlPSJTZWFyY2giIGNsYXNzPSJidXR0b25pY29uIiAvPjwvZm9ybT48ZGl2CmNsYXNzPSJjbGVhciI+PC9kaXY+PC9kaXY+PGRpdgpjbGFzcz0iY2xlYXIiPjwvZGl2PjwvZGl2PjwvaGVhZGVyPjxkaXYKY2xhc3M9ImNsZWFyIj48L2Rpdj48ZGl2CmNsYXNzPSJzdWItaGVhZGVyIj48ZGl2CmNsYXNzPSJ3cmFwLW1pZGRsZSI+PGZvcm0KaWQ9InNlYXJjaGZvcm0yIiBjbGFzcz0iaGVhZGVyLXNlYXJjaCIgbWV0aG9kPSJnZXQiIGFjdGlvbj0iaHR0cHM6Ly93d3cucG5ncGl4LmNvbS8iPjxpbnB1dApwbGFjZWhvbGRlcj0iU2VhcmNoIFBORyAuLi4iIHR5cGU9InRleHQiIG5hbWU9InMiIGlkPSJzIiAvPjxpbnB1dAp0eXBlPSJzdWJtaXQiIHZhbHVlPSJTZWFyY2giIGNsYXNzPSJidXR0b25pY29uIiAvPjwvZm9ybT48ZGl2CmNsYXNzPSJjbGVhciI+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdgpjbGFzcz0iaG9tZS1mdWxsd2lkdGgiPjxkaXYKY2xhc3M9IndyYXAtY29udGVudCI+PGRpdgpjbGFzcz0iYXJjaGl2ZS1oZWFkZXIiPjxoMz5FcnJvciA0MDQgLSBOb3QgRm91bmQgPGJyCi8+IFNvcnJ5LCBidXQgeW91IGFyZSBsb29raW5nIGZvciBzb21ldGhpbmcgdGhhdCBpc24mIzAzOTt0IGhlcmUuPC9oMz48L2Rpdj48dWwKaWQ9ImluZmluaXRlLWFydGljbGVzIiBjbGFzcz0iZ3JpZF9saXN0IGpzLW1hc29ucnkiIGRhdGEtbWFzb25yeS1vcHRpb25zPSd7ICJjb2x1bW5XaWR0aCI6IDAgfSc+PC91bD48ZGl2CmNsYXNzPSJjbGVhciI+PC9kaXY+PC9kaXY+PGRpdgpjbGFzcz0iY2xlYXIiPjwvZGl2PjwvZGl2Pjxmb290ZXI+PGRpdgpjbGFzcz0ic29jaWFsLXNlY3Rpb24iPjx1bApjbGFzcz0iZm9vdGVyLXNvY2lhbCI+PGxpPjxhCmhyZWY9Imh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wbmdwaXgiIHRhcmdldD0iX2JsYW5rIj48aQpjbGFzcz0iZmEgZmEtZmFjZWJvb2siPjwvaT48L2E+PC9saT48bGk+PGEKaHJlZj0iaHR0cHM6Ly90d2l0dGVyLmNvbS9wbmdwaXhjb20iIHRhcmdldD0iX2JsYW5rIj48aQpjbGFzcz0iZmEgZmEtdHdpdHRlciI+PC9pPgo8L2E+PC9saT48bGk+PGEKaHJlZj0iaHR0cHM6Ly93d3cucGludGVyZXN0LmNvbS9wbmdwaXhjb20vIiB0YXJnZXQ9Il9ibGFuayI+PGkKY2xhc3M9ImZhIGZhLXBpbnRlcmVzdCI+PC9pPjwvYT48L2xpPjxsaT48YQpocmVmPSIjIj48aQpjbGFzcz0iZmEgZmEtZ29vZ2xlLXBsdXMiPjwvaT48L2E+PC9saT48bGk+PGEKaHJlZj0iIyI+PGkKY2xhc3M9ImZhIGZhLXlvdXR1YmUiPjwvaT48L2E+PC9saT48L3VsPjwvZGl2PjxkaXYKY2xhc3M9IndyYXAtZm9vdGVyIj48ZGl2CmNsYXNzPSJjb3B5cmlnaHQiPgpDb3B5cmlnaHQgwqkgMjAxOCBQbmdQaXggPGEKaHJlZj0iIyI+QWJvdXQ8L2E+IHwgPGEKaHJlZj0iIyI+TGljZW5zZTwvYT4gfCA8YQpocmVmPSIjIj5UZXJtcyBvZiBTZXJ2aWNlPC9hPiB8IDxhCmhyZWY9IiMiPkRNQ0EgQ29weXJpZ2h0IFBvbGljeTwvYT48L2Rpdj48L2Rpdj48cAppZD0iYmFjay10b3AiPjxhCmhyZWY9IiN0b3AiPjxzcGFuPjwvc3Bhbj48L2E+PC9wPgo8L2Zvb3Rlcj4gPHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPnZhciBqcXVlcnljc3NtZW51PXtmYWRlc2V0dGluZ3M6e292ZXJkdXJhdGlvbjowLG91dGR1cmF0aW9uOjEwMH0sYnVpbGRtZW51OmZ1bmN0aW9uKGIsYSl7alF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbihlKXt2YXIgYz1lKCIjIitiKyI+dWwiKTt2YXIgZD1jLmZpbmQoInVsIikucGFyZW50KCk7ZC5lYWNoKGZ1bmN0aW9uKGcpe3ZhciBoPWUodGhpcyk7dmFyIGY9ZSh0aGlzKS5maW5kKCJ1bDplcSgwKSIpO3RoaXMuX2RpbWVuc2lvbnM9e3c6dGhpcy5vZmZzZXRXaWR0aCxoOnRoaXMub2Zmc2V0SGVpZ2h0LHN1YnVsdzpmLm91dGVyV2lkdGgoKSxzdWJ1bGg6Zi5vdXRlckhlaWdodCgpfTt0aGlzLmlzdG9waGVhZGVyPWgucGFyZW50cygidWwiKS5sZW5ndGg9PTE/dHJ1ZTpmYWxzZTtmLmNzcyh7dG9wOnRoaXMuaXN0b3BoZWFkZXI/dGhpcy5fZGltZW5zaW9ucy5oKyJweCI6MH0pO2guY2hpbGRyZW4oImE6ZXEoMCkiKS5jc3ModGhpcy5pc3RvcGhlYWRlcj97cGFkZGluZ1JpZ2h0OmEuZG93blsyXX06e30pLmFwcGVuZCgnPGltZyBzcmM9IicrKHRoaXMuaXN0b3BoZWFkZXI/YS5kb3duWzFdOmEucmlnaHRbMV0pKyciIGNsYXNzPSInKyh0aGlzLmlzdG9waGVhZGVyP2EuZG93blswXTphLnJpZ2h0WzBdKSsnIiBzdHlsZT0iYm9yZGVyOjA7IiAvPicpO2guaG92ZXIoZnVuY3Rpb24oail7dmFyIGk9ZSh0aGlzKS5jaGlsZHJlbigidWw6ZXEoMCkiKTt0aGlzLl9vZmZzZXRzPXtsZWZ0OmUodGhpcykub2Zmc2V0KCkubGVmdCx0b3A6ZSh0aGlzKS5vZmZzZXQoKS50b3B9O3ZhciBrPXRoaXMuaXN0b3BoZWFkZXI/MDp0aGlzLl9kaW1lbnNpb25zLnc7az0odGhpcy5fb2Zmc2V0cy5sZWZ0K2srdGhpcy5fZGltZW5zaW9ucy5zdWJ1bHc+ZSh3aW5kb3cpLndpZHRoKCkpPyh0aGlzLmlzdG9waGVhZGVyPy10aGlzLl9kaW1lbnNpb25zLnN1YnVsdyt0aGlzLl9kaW1lbnNpb25zLnc6LXRoaXMuX2RpbWVuc2lvbnMudyk6aztpLmNzcyh7bGVmdDprKyJweCJ9KS5mYWRlSW4oanF1ZXJ5Y3NzbWVudS5mYWRlc2V0dGluZ3Mub3ZlcmR1cmF0aW9uKX0sZnVuY3Rpb24oaSl7ZSh0aGlzKS5jaGlsZHJlbigidWw6ZXEoMCkiKS5mYWRlT3V0KGpxdWVyeWNzc21lbnUuZmFkZXNldHRpbmdzLm91dGR1cmF0aW9uKX0pfSk7Yy5maW5kKCJ1bCIpLmNzcyh7ZGlzcGxheToibm9uZSIsdmlzaWJpbGl0eToidmlzaWJsZSJ9KX0pfX07dmFyIGFycm93aW1hZ2VzPXtkb3duOlsnZG93bmFycm93Y2xhc3MnLCdodHRwczovL3d3dy5wbmdwaXguY29tL3dwLWNvbnRlbnQvdGhlbWVzL3BuZ3BpeC9pbWFnZXMvbWVudS9hcnJvdy1kb3duLnBuZyddLHJpZ2h0OlsncmlnaHRhcnJvd2NsYXNzJywnaHR0cHM6Ly93d3cucG5ncGl4LmNvbS93cC1jb250ZW50L3RoZW1lcy9wbmdwaXgvaW1hZ2VzL21lbnUvYXJyb3ctcmlnaHQucG5nJ119O2pxdWVyeWNzc21lbnUuYnVpbGRtZW51KCJteWpxdWVyeW1lbnUiLGFycm93aW1hZ2VzKTtqcXVlcnljc3NtZW51LmJ1aWxkbWVudSgibXlqcXVlcnltZW51LWNhdCIsYXJyb3dpbWFnZXMpOzwvc2NyaXB0PiA8c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCI+alF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKXska3dtRm9yY2VEb3dubG9hZD0kKCJib2R5IGEua3dtLWZvcmNlLWRvbndsb2FkIik7JGt3bUZvcmNlRG93bmxvYWQuZWFjaChmdW5jdGlvbihpbmRleCl7dmFyIG9sZEhyZWY9JCh0aGlzKS5kYXRhKCJmb3JjZWRvd25sb2FkIik7JCh0aGlzKS5wcm9wKCJocmVmIiwiaHR0cHM6Ly93d3cucG5ncGl4LmNvbS9kb3dubG9hZC8iK29sZEhyZWYpO30pO30pOzwvc2NyaXB0PjxzY3JpcHQgbGFuZ3VhZ2U9ImphdmFzY3JpcHQiIHR5cGU9InRleHQvamF2YXNjcmlwdCI+dmFyIGtwZ19jZWxsPSJOIjt2YXIga3BnX25yY2lfaW1hZ2U9Imh0dHA6Ly93d3cucG5ncGl4LmNvbS93cC1jb250ZW50L3BsdWdpbnMvbm8tcmlnaHQtY2xpY2staW1hZ2VzLXBsdWdpbi9ub3QuZ2lmIjt2YXIga3BnX25yY2lfZXh0cmE9Ik4iO3ZhciBrcGdfbnJjaV9kcmFnPSJZIjs8L3NjcmlwdD4gPHNjcmlwdCBsYW5ndWFnZT0iamF2YXNjcmlwdCIgdHlwZT0idGV4dC9qYXZhc2NyaXB0IiBzcmM9Imh0dHA6Ly93d3cucG5ncGl4LmNvbS93cC1jb250ZW50L3BsdWdpbnMvbm8tcmlnaHQtY2xpY2staW1hZ2VzLXBsdWdpbi9uby1yaWdodC1jbGljay1pbWFnZXMuanMiPjwvc2NyaXB0PiA8c2NyaXB0PmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtqUXVlcnkucG9zdCgnaHR0cHM6Ly93d3cucG5ncGl4LmNvbT9nYV9hY3Rpb249Z29vZ2xlYW5hbHl0aWNzX2dldF9zY3JpcHQnLHthY3Rpb246J2dvb2dsZWFuYWx5dGljc19nZXRfc2NyaXB0J30sZnVuY3Rpb24ocmVzcG9uc2Upe3ZhciBGPW5ldyBGdW5jdGlvbihyZXNwb25zZSk7cmV0dXJuKEYoKSk7fSk7fSk7PC9zY3JpcHQ+PGRpdgpzdHlsZT0iZGlzcGxheTpub25lIj48ZGl2CmlkPSJhcnZsYmRhdGEiIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlO3dpZHRoOjQwMHB4O2hlaWdodDoyNTBweDsiPjxkaXYKYWxsb3d0cmFuc3BhcmVuY3k9InRydWUiIHN0eWxlPSJvdmVyZmxvdzpoaWRkZW47d2lkdGg6NDAwcHg7aGVpZ2h0OjI1MHB4OyIgY2xhc3M9ImZiLXBhZ2UiCmRhdGEtaHJlZj0iaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BuZ3BpeCIKZGF0YS13aWR0aD0iNDAwIgpkYXRhLWhlaWdodD0iMjUwIgpkYXRhLXNtYWxsLWhlYWRlcj0iZmFsc2UiCmRhdGEtYWRhcHQtY29udGFpbmVyLXdpZHRoPSJmYWxzZSIKZGF0YS1oaWRlLWNvdmVyPSJ0cnVlIgpkYXRhLXNob3ctZmFjZXBpbGU9InRydWUiCmRhdGEtc2hvdy1wb3N0cz0iZmFsc2UiPjwvZGl2PjwvZGl2PjwvZGl2PiA8c2NyaXB0IHR5cGU9J3RleHQvamF2YXNjcmlwdCcgc3JjPSdodHRwczovL3d3dy5wbmdwaXguY29tL3dwLWNvbnRlbnQvdGhlbWVzL3BuZ3BpeC9vd2wtY2Fyb3VzZWwvb3dsLmNhcm91c2VsLm1pbi5qcz92ZXI9NC45LjQnPjwvc2NyaXB0PiA8c2NyaXB0IHR5cGU9J3RleHQvamF2YXNjcmlwdCcgc3JjPSdodHRwczovL3d3dy5wbmdwaXguY29tL3dwLWNvbnRlbnQvdGhlbWVzL3BuZ3BpeC9qcy9qcXVlcnkubWFpbi5qcz92ZXI9NC45LjQnPjwvc2NyaXB0PiA8c2NyaXB0IHR5cGU9J3RleHQvamF2YXNjcmlwdCcgc3JjPSdodHRwczovL3d3dy5wbmdwaXguY29tL3dwLWNvbnRlbnQvdGhlbWVzL3BuZ3BpeC9qcy9jdXN0b20uanM/dmVyPTQuOS40Jz48L3NjcmlwdD4gPHNjcmlwdCB0eXBlPSd0ZXh0L2phdmFzY3JpcHQnIHNyYz0naHR0cHM6Ly93d3cucG5ncGl4LmNvbS93cC1pbmNsdWRlcy9qcy93cC1lbWJlZC5taW4uanM/dmVyPTQuOS40Jz48L3NjcmlwdD4gPC9ib2R5PjwvaHRtbD4KPCEtLQoqKiogVGhpcyBzaXRlIHJ1bnMgV1AgU3VwZXIgTWluaWZ5IHBsdWdpbiB2MS41LjEgLSBodHRwOi8vd29yZHByZXNzLm9yZy9wbHVnaW5zL3dwLXN1cGVyLW1pbmlmeSAqKioKKioqIFRvdGFsIHNpemUgc2F2ZWQ6IDE2LjE4NCUgfCBTaXplIGJlZm9yZSBjb21wcmVzc2lvbjogMjA2OTkgYnl0ZXMgfCBTaXplIGFmdGVyIGNvbXByZXNzaW9uOiAxNzM0OSBieXRlcy4gKioqCi0tPg=='
    },
    defaultStyle: {
      fontSize: 8,
    },
    watermark: { text: 'Abdul Samad', color: 'black', opacity: 0.3, bold: true, italics: false },
    styles: {
      footer: {
        fontSize: 16,
        bold: true,
        alignment: 'center',
      }
    }
  };
};

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<User>}
 */
const generateStub = async (template, studData) => {
  
}

module.exports = {
  getStubTemplate,
  generateStub
}