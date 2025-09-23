# Write your MySQL query statement below

-- select null as SecondHighestSalary
-- union all
-- select max(e.salary) as SecondHighestSalary from Employee as e where e.salary < (select max(e.salary) as HighestSalary from Employee as e)


select (select distinct e.salary from Employee as e
order by e.salary desc
limit 1 offset 1) as SecondHighestSalary

-- select e.salary as SecondHighestSalary from Employee as e
-- order by e.salary desc
-- limit 1,1
