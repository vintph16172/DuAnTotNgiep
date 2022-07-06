import  express  from "express"
import { addCategory, editCategory, listCategories, removeCategory } from "../controllers/category";


const routeCategory = express.Router();

routeCategory.get('/categories', listCategories);
routeCategory.post('/categories', addCategory);
routeCategory.put('/categories:id', editCategory);
routeCategory.delete('/categories:id', removeCategory);


export default routeCategory;