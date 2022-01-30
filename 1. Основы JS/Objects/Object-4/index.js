const giveJobToStudent = (student, jobName) => {
    
    student.job  = jobName;
    return alert( `Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);
}

const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
  }
  
  const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
  console.log(student)