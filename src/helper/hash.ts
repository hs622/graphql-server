import bcrypt from 'bcrypt';

export const hash = async (pass: string): Promise<String> => {
  const hash = await bcrypt.hash(pass, 10)
    .then(hash => {
      return hash;
    })
    .catch(err => {
      throw new err
    })

  return hash;
}