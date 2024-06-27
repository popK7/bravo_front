
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

export default [...dashboard, ...calendars, ...employees, ...presences, ...absences, ...payroll, ...expenses, ...employeeData, ...accountData, ...workflows, ...indicators]
