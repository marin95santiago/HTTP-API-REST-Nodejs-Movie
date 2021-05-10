import mongoose from 'mongoose';
import ev from './environmentVariables';

const URI = ev.DB.URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

mongoose.connection.once('open', () => {
    try {
        console.log('Database connected')
    } catch (error) {
        console.log(error.message);
    }
});