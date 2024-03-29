const square  = function(number) {
    return number * number;
}

const square_2  = number => number * number;
console.log(square_2(5));


const jobs = [
    { id: 1, isActive: true},
    { id: 2, isActive: true},
    { id: 3, isActive: false}
];

const activeJobs = jobs.filter(function(job) { return job.isActive; });
const activeJobs_2 = jobs.filter(job => job.isActive );