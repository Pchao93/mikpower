import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
				<tbody>
          <tr className="table-header">
  					<td rowSpan="2" width="10%" align="center">Part Number</td>
  					<td rowSpan="2" width="10%" align="center">Max. Voltage</td>
  					<td colSpan="2" width="16%" align="center">Current</td>
  					<td colSpan="5" rowSpan="1" width="35%" align="center">Available Package</td>
  					<td rowSpan="2" width="10%" align="center">English Datasheet</td>
  					<td rowSpan="2" width="8%" align="center">中文<br></br>产品说明</td>
  					<td rowSpan="2" width="8%" align="center">Appnote<br></br>应用说明</td>
  				</tr>
  				<tr className="table-header">
  					<td width="6%" align="center">Rating (mA)</td>
  					<td width="10%" align="center">Operating Mode</td>
  					<td width="7%" align="center">SOT-89</td>
  					<td width="8%" align="center">SOT-223</td>
  					<td width="7%" align="center">TO-252</td>
  					<td width="7%" align="center">TO-263</td>
  					<td width="7%" align="center">TO-220</td>
  				</tr>
  				<tr>
  					<td align="center">MIK36010</td>
  					<td align="center">200</td>
  					<td align="center">10</td>
  					<td align="center">Fixed</td>
  					<td align="center">✓ </td>
  					<td align="center">✓ </td>
  					<td align="center">✓ </td>
  					<td></td>
  					<td></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK36xxW_EN_20140108.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK36010W_CN_20131009.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/MIK362X_AN01_V1.3.pdf">PDF</a></td>
  				</tr>
  				<tr>
  					<td align="center">MIK3622</td>
  					<td align="center">200</td>
  					<td align="center">20</td>
  					<td align="center">Fixed</td>
  					<td align="center">✓ </td>
  					<td align="center">✓ </td>
  					<td align="center">✓ </td>
  					<td></td>
  					<td></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK36xxW_EN_20140108.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK3622W_CN_20131009.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/MIK362X_AN01_V1.3.pdf">PDF</a></td>
  				</tr>
  				<tr>
  					<td align="center">MIK36025</td>
  					<td align="center">200</td>
  					<td align="center">25</td>
  					<td align="center">Fixed</td>
  					<td></td>
  					<td align="center">✓ </td>
  					<td align="center">✓ </td>
  					<td></td>
  					<td></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK36xxW_EN_20140108.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK36025W_CN_20131009.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/MIK362X_AN01_V1.3.pdf">PDF</a></td>
  				</tr>
  				<tr>
  					<td align="center">MIK3623</td>
  					<td align="center">200</td>
  					<td align="center">30</td>
  					<td align="center">Fixed</td>
  					<td></td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td></td>
  					<td></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK36xxW_EN_20140108.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK3623W_CN_20131009.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/MIK362X_AN01_V1.3.pdf">PDF</a></td>
  				</tr>
  				<tr>
  					<td align="center">MIK3624</td>
  					<td align="center">200</td>
  					<td align="center">40</td>
  					<td align="center">Fixed</td>
  					<td></td>
  					<td></td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK36xxW_EN_20140108.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK3624W_CN_20131009.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/MIK362X_AN01_V1.3.pdf">PDF</a></td>
  				</tr>
  				<tr>
  					<td align="center">MIK3605</td>
  					<td align="center">200</td>
  					<td align="center">50</td>
  					<td align="center">Fixed</td>
  					<td></td>
  					<td></td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK36xxW_EN_20140108.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK3605W_CN_20131009.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/MIK362X_AN01_V1.3.pdf">PDF</a></td>
  				</tr>
  				<tr>
  					<td align="center">MIK3655</td>
  					<td align="center">200</td>
  					<td align="center">55</td>
  					<td align="center">Fixed</td>
  					<td></td>
  					<td></td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK36xxW_EN_20140108.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK3655W_CN_20131009.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/MIK362X_AN01_V1.3.pdf">PDF</a></td>
  				</tr>
  				<tr>
  					<td align="center">MIK3626</td>
  					<td align="center">200</td>
  					<td align="center">60</td>
  					<td align="center">Fixed</td>
  					<td></td>
  					<td></td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK36xxW_EN_20140108.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK3626W_CN_20131009.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/MIK362X_AN01_V1.3.pdf">PDF</a></td>
  				</tr>
  				<tr>
  					<td align="center">MIK3628</td>
  					<td align="center">200</td>
  					<td align="center">80</td>
  					<td align="center">Fixed</td>
  					<td></td>
  					<td></td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK36xxW_EN_20140108.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK3628W_CN_20131009.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/MIK362X_AN01_V1.3.pdf">PDF</a></td>
  				</tr>
  				<tr>
  					<td align="center">MIK3609</td>
  					<td align="center">200</td>
  					<td align="center">90</td>
  					<td align="center">Fixed</td>
  					<td></td>
  					<td></td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK36xxW_EN_20140108.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK3609W_CN_20131009.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/MIK362X_AN01_V1.3.pdf">PDF</a></td>
  				</tr>
  				<tr>
  					<td align="center">MIK3610</td>
  					<td align="center">200</td>
  					<td align="center">100</td>
  					<td align="center">Fixed</td>
  					<td></td>
  					<td></td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK36xxW_EN_20140108.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK3610W_CN_20131009.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/MIK362X_AN01_V1.3.pdf">PDF</a></td>
  				</tr>
  				<tr>
  					<td align="center">MIK3600</td>
  					<td align="center">200</td>
  					<td align="center">20-40</td>
  					<td align="center">Adjustable</td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td align="center">✓</td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK36xxW_EN_20140108.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/Datasheet_MIK36xxW_CN_20140108.pdf">PDF</a></td>
  					<td align="center"><a href="http://www.mikpowerinc.com/docs/MIK362X_AN01_V1.3.pdf">PDF</a></td>
  				</tr>
			  </tbody>
      </table>
    );
  }
}
export default Table;
