const studentDao = require('../dao/studentDao');

function queryAllStudent(success) {
    studentDao.queryAllStudent(success);
}

function queryStudentBySNo(sNo, success) {
    studentDao.queryStudentBySNo(sNo, success);
}

module.exports = {
    queryAllStudent,
    queryStudentBySNo
};
