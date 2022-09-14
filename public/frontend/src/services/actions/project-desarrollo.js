import axios from 'axios';
import { 
    POST_PROJECT_DESA, 
    POST_ACTIVITY_DESA, 
    POST_CONSTITUCIONAL_ACT_DESA,
    POST_CALENDAR_DESA, 
    POST_ORGANIZATIONAL_STRUCTURE_DESA, 
    POST_STAKEHOLDER_MATRIX_DESA
} from '../apis/project-desarrollo';

export const projectDesaEntity = () => {
    //const GET = ()
    const POST = (newProject) => {
        console.log('new-project =>', newProject)
        axios.post(POST_PROJECT_DESA, {
            data: newProject
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            })
            .then(function () {
            });
    }

    return {
        POST
    }
}

export const activityDesaEntity = () => {
    const POST = (newActivity) => {
        axios.post(POST_ACTIVITY_DESA, {
            data: newActivity
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            })
            .then(function () {
            });
    }

    return {
        POST
    }
}

export const constitucionalActDesaEntity = () => {
    const POST = (newConstitucionalAct) => {
        axios.post(POST_CONSTITUCIONAL_ACT_DESA, {
            data: newConstitucionalAct
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            })
            .then(function () {
            });
    }

    return {
        POST
    }
}

export const calendarDesaEntity = () => {
    const POST = (newCalendar) => {
        axios.post(POST_CALENDAR_DESA, {
            data: newCalendar
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            })
            .then(function () {
            });
    }

    return {
        POST
    }
}

export const organizationalStructureDesaEntity = () => {
    const POST = (newOrganizationalStructure) => {
        axios.post(POST_ORGANIZATIONAL_STRUCTURE_DESA, {
            data: newOrganizationalStructure
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            })
            .then(function () {
            });
    }

    return {
        POST
    }
}

export const stakeholderMatrixDesaEntity = () => {
    const POST = (newStakeholderMatrix) => {
        axios.post(POST_STAKEHOLDER_MATRIX_DESA, {
            data: newStakeholderMatrix
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            })
            .then(function () {
            });
    }

    return {
        POST
    }
}

/* function getAllRequest()
{
   axios.get('http://localhost:8080/item')
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}
function getFilteredRequest()
{
   axios.get('http://localhost:8080/item', {
      params: {
         filter : 'myFilter'
      }
     })
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}
function getByIdRequest()
{
   id = 10;
   axios.get('http://localhost:8080/item/' + id)
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}
function postRequest()
{
   axios.post('http://localhost:8080/item', {
      data: 'NewItem'
     })
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}
function putRequest()
{
   id = 10;
   axios.put('http://localhost:8080/item/' + id, {
      data: 'NewItem'
     })
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}
function patchRequest()
{
   id = 10;
   axios.patch('http://localhost:8080/item/' + id, {
      data: 'NewItem'
     })
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}
function deleteRequest()
{
   id = 10;
   axios.delete('http://localhost:8080/item/' + id)
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}*/