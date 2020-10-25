USE employee_tracker_db;

INSERT INTO department (name)
VALUES ('Production'), 
('Sales'), 
('R&D'), 
('Accounting'),
('HR');

INSERT INTO role (title, salary, department_id)
VALUES ('Production Associate', 60000, 1), 
('Head of Production', 120000, 1), 
('Sales Associate', 70000, 2), 
('Sales Manager', 150000, 2), 
('Research Associate', 90000, 3), 
('Head of Research', 130000, 3), 
('Accountant', 35000, 4),
('Head of Accounting', 110000, 4),
('Head of HR', 130000, 5),
('Talent Acquisition Associate', 30000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Emmanuel', 'Durand', 1, null), 
('John', 'Smith', 2, null), 
('Lara', 'Fabien', 3, 2), 
('Nick', 'Leeson', 4, null), 
('Jerome', 'Kerviel', 5, 1), 
('Sara', 'Roesler', 6, 1),
('Jean', 'Bon', 7, null), 
('Michel', 'Jarre', 8, 1), 
('Jean-Michel', 'Pitoulacci', 9, null), 
('Marlene', 'Jobert', 9, 3);
