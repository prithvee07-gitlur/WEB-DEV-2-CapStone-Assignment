import { Box, Button, TextField, MenuItem, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Formik } from "formik";
import * as yup from "yup";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockDataTasks, mockDataTeam } from "../../data/mockData";
import { useState } from "react";

const initialValues = {
  title: "",
  assignee: "",
  priority: "Medium",
  dueDate: "",
};

const checkoutSchema = yup.object().shape({
  title: yup.string().required("required"),
  assignee: yup.string().required("required"),
  priority: yup.string().required("required"),
  dueDate: yup.date().required("required"),
});

const Tasks = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  // Local state to handle adding new tasks dynamically
  const [tasks, setTasks] = useState(mockDataTasks);

  const handleFormSubmit = (values, { resetForm }) => {
    const newTask = {
      id: tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
      title: values.title,
      assignee: values.assignee,
      priority: values.priority,
      dueDate: values.dueDate,
      status: "Todo", // Default status for new tasks
    };
    
    setTasks([...tasks, newTask]);
    resetForm();
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "title",
      headerName: "Task Title",
      flex: 1.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "assignee",
      headerName: "Assigned To",
      flex: 1,
    },
    {
      field: "priority",
      headerName: "Priority",
      flex: 0.5,
      renderCell: ({ row: { priority } }) => {
        return (
          <Typography 
            color={
              priority === "High" ? colors.redAccent[400] 
              : priority === "Medium" ? colors.greenAccent[400] 
              : colors.grey[100]
            }
          >
            {priority}
          </Typography>
        );
      }
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.75,
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="ASSIGN TASKS" subtitle="Create and assign tasks to team members" />

      {/* FORM SECTION */}
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: "span 4" }, // Full width on small screens
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Task Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                select
                variant="filled"
                label="Assignee"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.assignee}
                name="assignee"
                error={!!touched.assignee && !!errors.assignee}
                helperText={touched.assignee && errors.assignee}
                sx={{ gridColumn: "span 2" }}
              >
                {mockDataTeam.map((member) => (
                  <MenuItem key={member.id} value={member.name}>
                    {member.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                select
                variant="filled"
                label="Priority"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.priority}
                name="priority"
                error={!!touched.priority && !!errors.priority}
                helperText={touched.priority && errors.priority}
                sx={{ gridColumn: "span 2" }}
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Due Date"
                InputLabelProps={{ shrink: true }}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dueDate}
                name="dueDate"
                error={!!touched.dueDate && !!errors.dueDate}
                helperText={touched.dueDate && errors.dueDate}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create Task
              </Button>
            </Box>
          </form>
        )}
      </Formik>

      {/* TABLE SECTION */}
      <Box
        m="40px 0 0 0"
        height="50vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={tasks}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Tasks;
