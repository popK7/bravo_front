
import absences from './absences'
import accountData from './accounts-data'
import calendars from './calendars'
import dashboard from './dashboard'
import employeeData from './employee-data'
import employees from './employees'
import expenses from './expenses'
import indicators from './indicators'
import payroll from './payroll'
import presences from './presences'
import workflows from './workflows'
import currentUser from './current-user'
import reporting from './reports'



export default [...dashboard, ...calendars, ...currentUser, ...employees, ...presences, ...absences, ...payroll, ...expenses, ...employeeData, ...accountData, ...reporting, ...workflows, ...indicators]
