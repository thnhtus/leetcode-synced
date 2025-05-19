-- Write your PostgreSQL query statement below
select author_id as id from Views v
    where v.viewer_id = v.author_id
    group by id
    order by id asc

